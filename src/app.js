import express from 'express';
import LogMiddleware from './middlewares/logMiddleware.js';
import UserController from './controllers/UserController.js';

class app {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }   
}

// Middleware
app.use(express.json());
app.use(LogMiddleware.handle);

// Routes
app.post('/users', UserController.store);

export default app;
