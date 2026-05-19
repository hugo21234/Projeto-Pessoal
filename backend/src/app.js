import dotenv from 'dotenv';
import express from 'express';
import LogMiddleware from './middlewares/logMiddleware.js';
import routes from './routes/index.js';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();


const whiteList = [
 'http://localhost:3000',
  'http://localhost:3333',
  'http://137.131.204.143:3333',
  'http://137.131.204.143',
  'http://localhost:5173'
]

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
 }
}
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
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
