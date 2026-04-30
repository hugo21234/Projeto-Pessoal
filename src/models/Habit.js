import Sequelize, { Model } from 'sequelize';

class Habit extends Model {
  static initModel(sequelize) {
    Habit.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      modelName: 'Habit',
      tableName: 'habits',
      timestamps: true,
    });
    return Habit;
  }
}

export default Habit;
