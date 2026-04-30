import HabitService from '../services/HabitService.js';

class HabitController {

    static async index(req, res) {
      try {
        const habits = await HabitService.getAll();
        res.json(habits);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }

    static async show(req, res) {
     try{
      const habit = await HabitService.findById(req.params.id);
      if (!habit) {
        return res.status(404).json({ error: 'Habit not found' });
      }
      res.json(habit); 
     }catch(error){
      res.status(500).json({ error: error.message });
     }
    }

  static async store(req, res) {
    try {
      const { name, email, password } = req.body;
      const habit = await HabitService.create({ name, email, password });
      res.status(201).json({ id: habit.id, name: habit.name, email: habit.email, created_at: habit.createdAt });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    static async update(req,res){
  try{
  await HabitService.update(req.params.id, req.body);
    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }
  }catch(error){
  res.status(400).json({ error: error.message });

  }
 }


} 
export default UserController;
