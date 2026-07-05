import { PrismaClient } from '@prisma/client';

// PrismaClient will automatically read the DATABASE_URL from the .env file.
export const prisma = new PrismaClient();
