import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    console.log('[authMiddleware] header authorization:', authHeader ? '***present***' : '***missing***');

    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ message: 'Erro no formato do token.' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'Token mal formatado.' });
    }

    if (!process.env.JWT_SECRET) {
        console.error('[authMiddleware] JWT_SECRET não configurado');
        return res.status(500).json({ message: 'Servidor sem configuração de autenticação.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.warn('[authMiddleware] token inválido:', err?.message);
            return res.status(401).json({ message: 'Token inválido.' });
        }

        req.userId = decoded.id;
        console.log('[authMiddleware] ok userId:', req.userId);
        return next();
    });
}

