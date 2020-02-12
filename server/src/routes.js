import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
	return res.json({ ok: true });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // todas as rotas declaradas abaixo, deverão conter o token.

routes.post('/recipients', RecipientController.store);

export default routes;
