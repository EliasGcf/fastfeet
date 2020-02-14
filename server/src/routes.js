import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymenController from './app/controllers/DeliverymenController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
	return res.json({ ok: true });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // todas as rotas declaradas abaixo, deverão conter o token.

// Rotas de destinatarios
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

// Rotas de entregadores
routes.post('/deliverymen', DeliverymenController.store);
routes.get('/deliverymen', DeliverymenController.index);
routes.put('/deliverymen/:id', DeliverymenController.update);
routes.delete('/deliverymen/:id', DeliverymenController.destroy);

// Rotas de encomendas
routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);

routes.post('/files', upload.single('file'), FileController.store); // Upload de arquivos

export default routes;
