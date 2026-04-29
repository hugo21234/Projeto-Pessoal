import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const userRoutes = Router();

userRoutes.get('/users', UserController.index);
userRoutes.post('/users', UserController.store);
userRoutes.put('/users/:id', UserController.update);
userRoutes.get('/users/:id', UserController.show);

export default userRoutes;
