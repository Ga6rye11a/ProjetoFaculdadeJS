import { UsuarioRepository } from '../src/repositories/usuárioRepository.js';
import bcrypt from 'bcrypt';

const usuarioRepository = new UsuarioRepository();

export class UsuarioController {
    
    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        try {
            const usuario = await usuarioRepository.buscarPorEmail(email);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json({ message: 'Senha incorreta.' });
            }

            // Em uma aplicação real, aqui você geraria um token (JWT)
            // Por enquanto, vamos apenas retornar uma mensagem de sucesso.
            return res.status(200).json({ message: 'Login bem-sucedido!', usuario: { id: usuario.id, email: usuario.email } });

        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}
