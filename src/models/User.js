import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model{
  static initModel(sequelize) {
    User.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      hooks: {
        beforeCreate: async (user) => {
          if (user.password_hash) {
            user.password_hash = await bcrypt.hash(user.password_hash, 8);
          }
        },
      },
      timestamps: true,
      underscored: true,
    });
    return User;
  }
}

export default User;
