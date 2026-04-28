import User from '../models/User.js';

class UserService {
  static async create({ name, email, password }) {
    return User.create({ name, email, password_hash: password });
  }
}

export default UserService;
