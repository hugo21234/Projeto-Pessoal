import Habit from '../models/Habit.js';

class HabitService {
  static async getAll() {
    return Habit.findAll({ attributes: ['id', 'title', 'description', 'createdAt'] });
  }

  static async findById(id) {
    return Habit.findByPk(id, { attributes: ['id', 'title', 'description', 'createdAt'] });
  }
 
  static async create({ title, description }) {
    return Habit.create({ title, description }); 
  }

  static async update(id, data) {
    const habit = await Habit.findByPk(id);
    if (!habit) {
      return null;
    }
    await habit.update(data);
    return habit;
  }
}

export default HabitService;
