import UserService from '../services/UserService.js';

class UserController {

    static async index(req, res) {
      try {
        const users = await UserService.getAll();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }


  static async store(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await UserService.create({ name, email, password });
      res.status(201).json({ id: user.id, name: user.name, email: user.email, created_at: user.createdAt });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
