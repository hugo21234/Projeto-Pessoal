import Logger from '../models/Logger.js';

class LogService {
  static async create({ method, url, timestamp }) {
    return Logger.create({ method, url, timestamp });
  }
}

export default LogService;
