import { prisma } from '../database/prismaClient.js';
import bcrypt from 'bcrypt';

async function main() {
  console.log(`Iniciando o seed...`);

  // Criptografar senhas
  const saltRounds = 10;
  const senhaJoao = await bcrypt.hash('senha123', saltRounds);
  const senhaMaria = await bcrypt.hash('senha456', saltRounds);

  // Limpar dados existentes para evitar erros de chave única
  await prisma.adocao.deleteMany({});
  await prisma.pet.deleteMany({});
  await prisma.usuario.deleteMany({});
  console.log('Dados antigos limpos.');

  // Criar usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      email: 'joao.silva@example.com',
      senha: senhaJoao,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      email: 'maria.santos@example.com',
      senha: senhaMaria,
    },
  });

  console.log(`Usuários criados: ${usuario1.email}, ${usuario2.email}`);

  // Criar pets
  const pet1 = await prisma.pet.create({
    data: {
      nome: 'Rex',
      especie: 'Cachorro',
    },
  });

  const pet2 = await prisma.pet.create({
    data: {
      nome: 'Mimi',
      especie: 'Gato',
    },
  });

  const pet3 = await prisma.pet.create({
    data: {
      nome: 'Piu',
      especie: 'Pássaro',
    },
  });

  console.log(`Pets criados: ${pet1.nome}, ${pet2.nome}, ${pet3.nome}`);
  
  console.log(`Seed finalizado.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
