import LogService from '../services/LogService.js';

class LogMiddleware {
  static async handle(req, res, next) {
    await LogService.create({
      method: req.method,
      url: req.originalUrl,
      timestamp: new Date(),
    });
    next();
  }
}

export default LogMiddleware;
