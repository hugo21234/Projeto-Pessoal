import { Router } from 'express';
import userRoutes from './userRoutes.js';
import tokenRoutes from './TokensRoute.js';

const routes = Router();

routes.use(userRoutes, tokenRoutes);


export default routes;
