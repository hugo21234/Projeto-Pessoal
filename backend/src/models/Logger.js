import { DataTypes, Model } from 'sequelize';

class Logger extends Model {
  static initModel(sequelize) {
    Logger.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Logger',
      tableName: 'loggers',
      timestamps: true,
      underscored: true,
    });
    return Logger;
  }
}

export default Logger;
