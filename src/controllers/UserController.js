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

    static async show(req, res) {
     try{
      const user = await UserService.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user); 
     }catch(error){
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
    static async update(req,res){
  try{
  await UserService.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  }catch(error){
  res.status(400).json({ error: error.message });

  }
 }


} 
export default UserController;
