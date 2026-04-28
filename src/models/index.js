import { Sequelize } from 'sequelize';
import dbConfig from '../config/database.js';
import User from './User.js';
import Logger from './Logger.js';

const models = [User, Logger];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.sequelize = new Sequelize(dbConfig);
    models.forEach((model) => model.init(this.sequelize));
  }
}
export { sequelize, User, Logger };
export default sequelize;
