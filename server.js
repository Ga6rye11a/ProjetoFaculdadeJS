// src/server.js
import express from 'express';
import cors from 'cors';
import { UsuarioController } from './controllers/usuarioController.js';

const app = express();
const usuarioController = new UsuarioController();

// Permite que o React (porta 5173) converse com o Node (porta 3000)
app.use(cors());
app.use(express.json());

// A Rota exata que o seu Login.jsx está chamando no fetch!
app.post('/api/login', usuarioController.login);

app.listen(3000, () => {
    console.log('✅ Servidor Back-end rodando na porta 3000!');
});