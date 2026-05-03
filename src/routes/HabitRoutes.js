import { Router } from 'express';
import HabitController from '../controllers/HabitController.js';
import LoginRequired from '../middlewares/LoginRequired.js';

const HabitRoutes = Router();

HabitRoutes.get('/habits/:id', LoginRequired, HabitController.index);
HabitRoutes.post('/habits/:id', LoginRequired, HabitController.store);
HabitRoutes.put('/habits/:id', LoginRequired, HabitController.update);
HabitRoutes.get('/habits/:id', LoginRequired, HabitController.show);

export default HabitRoutes;
