import User from '../models/User.js';

class UserService {
  static async getAll() {
    return User.findAll({ attributes: ['id', 'name', 'email', 'createdAt'] });
  }

  static async findById(id) {
    return User.findByPk(id, { attributes: ['id', 'name', 'email', 'createdAt'] });
  }

  static async findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  static async create({ name, email, password }) {
    return User.create({ name, email, password_hash: password });
  }

  static async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    const updateData = { ...data };
    if (updateData.password) {
      updateData.password_hash = updateData.password;
      delete updateData.password;
    }
    await user.update(updateData);
    return user;
  }
}

export default UserService;
