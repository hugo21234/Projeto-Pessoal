import { Router } from 'express';
import userRoutes from './userRoutes.js';
import tokenRoutes from './TokensRoute.js';
import HabitRoutes from './HabitRoutes.js';

const routes = Router();

routes.use(userRoutes, tokenRoutes, HabitRoutes);


export default routes;
