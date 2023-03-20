import { sequelize } from '@/config/database';
import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import Session from './Session';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}
User.hasMany(Session);

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize });

export default User;