import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import LoginRequired from '../middlewares/LoginRequired.js';

const userRoutes = Router();

userRoutes.get('/users', LoginRequired, UserController.index);
userRoutes.post('/users', UserController.store);
userRoutes.put('/users/:id', LoginRequired, UserController.update);
userRoutes.get('/users/:id', LoginRequired, UserController.show);

export default userRoutes;
