import { PrismaClient } from '@prisma/client';
import process from 'process'; // 1. Traz o objeto process para o arquivo
import dotenv from 'dotenv';   // 2. Traz a biblioteca que lê o .env

dotenv.config(); // 3. Executa a leitura do seu arquivo .env

export const pprisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});
// Em vez de adaptadores, injetamos a URL do .env diretamente no construtor
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});