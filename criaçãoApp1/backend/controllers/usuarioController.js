import { UsuarioRepository } from '../repositories/usuarioRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const usuarioRepository = new UsuarioRepository();

export class UsuarioController {
    
    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        try {
            const usuario = await usuarioRepository.buscarPorEmail(email);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            const senhaCorreta = await bcrypt.compare(password, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json({ message: 'Senha incorreta.' });
            }

            const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ message: 'Login bem-sucedido!', token });

        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    async getMe(req, res) {
        try {
            const usuario = await usuarioRepository.buscarPorId(req.userId);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            return res.status(200).json(usuario);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}
