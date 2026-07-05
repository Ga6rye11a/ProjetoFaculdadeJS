import { prisma } from '../database/prismaClient.js';

export class UsuarioRepository {
    
    // Método que o Controller vai usar quando alguém clicar em "Entrar agora!"
    async buscarPorEmail(email) {
        const usuario = await prisma.usuario.findUnique({
            where: { email: email }
        });
        return usuario;
    }

    async buscarPorId(id) {
        const usuario = await prisma.usuario.findUnique({
            where: { id: id },
            select: {
                id: true,
                email: true,
                adocoes: true
            }
        });
        return usuario;
    }
}