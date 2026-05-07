import TokenController from "../controllers/TokenController.js";
import { Router } from 'express';  

const tokenRoutes = Router();

tokenRoutes.post('/tokens', TokenController.store);

export default tokenRoutes;