import dotenv from 'dotenv';
import express from 'express';
import LogMiddleware from './middlewares/logMiddleware.js';
import routes from './routes/index.js';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(LogMiddleware.handle);
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
