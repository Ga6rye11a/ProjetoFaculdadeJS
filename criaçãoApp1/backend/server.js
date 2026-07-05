// src/server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { UsuarioController } from './controllers/usuarioController.js';
import { PetController } from './controllers/petController.js';
import { authMiddleware } from './middleware/authMiddleware.js';

const app = express();
const usuarioController = new UsuarioController();
const petController = new PetController();

app.use(cors());
app.use(express.json());

// Rotas Públicas
app.post('/api/login', usuarioController.login);
app.get('/api/pets', petController.listarTodos);

// Rotas Protegidas
app.get('/api/me', authMiddleware, usuarioController.getMe);
app.post('/api/pets', authMiddleware, petController.criar);


app.listen(3000, () => {
    console.log('✅ Servidor Back-end rodando na porta 3000!');
});