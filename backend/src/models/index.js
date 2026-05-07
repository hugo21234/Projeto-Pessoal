import Sequelize from 'sequelize';
import dbConfig from '../config/database.js';
import User from './User.js';
import Logger from './Logger.js';
import Habit from './Habit.js';

const models = [User, Logger, Habit];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.sequelize = new Sequelize(dbConfig);
    models.forEach((model) => model.initModel(this.sequelize));
  }
}

export default new Database();
