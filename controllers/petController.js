import { PetRepository } from '../repositories/PetRepository.js';
import { PetResponseDTO } from '../src/dtos/PetResponseDTO.js';
import { redisClient } from '../database/redis.js';

const petRepository = new PetRepository();

export class PetController {
    async listarTodos(req, res) {
        try {
            // 1. Tentar obter os dados do Cache (Equivalente ao Cache de 2º Nível)
            const cache = await redisClient.get('cache_pets_disponiveis');
            if (cache) {
                return res.status(200).json(JSON.parse(cache));
            }

            // 2. Se não houver cache, buscar no Repositório
            const petsDb = await petRepository.buscarPetsDisponiveisComAdocoes();
            
            // 3. Converter os dados brutos da base de dados num DTO limpo
            const petsDTO = PetResponseDTO.converterLista(petsDb);

            // 4. Guardar no Cache para os próximos pedidos (expira em 1 hora)
            await redisClient.setEx('cache_pets_disponiveis', 3600, JSON.stringify(petsDTO));
            
            return res.status(200).json(petsDTO);

        } catch (error) {
            // AQUI: Utilizamos a variável "error" para imprimir o problema no terminal
            console.error("Erro na listagem de pets:", error);
            
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }
}
