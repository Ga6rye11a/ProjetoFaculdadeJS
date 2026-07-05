import { prisma } from '../database/prismaClient.js';

export class PetRepository {
    
    // Método para listar todos os pets disponíveis
    async buscarPetsDisponiveisComAdocoes() {
        const pets = await prisma.pet.findMany({
            where: { 
                status: 'DISPONIVEL' 
            },
            include: { 
                adocoes: true // Traz o histórico de adoções junto
            }
        });
        return pets;
    }

    // Método para buscar apenas um pet pelo ID
    async buscarPorId(id) {
        const pet = await prisma.pet.findUnique({
            where: { id: parseInt(id) }
        });
        return pet;
    }
}