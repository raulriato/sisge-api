import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from '@/config/database';
import Classroom from './Classroom';

class School extends Model<InferAttributes<School>, InferCreationAttributes<School>> {
  declare id: number;
  declare name: string;
  declare city: string;
  declare state: string;
  declare symbol: string;
}

School.hasMany(Classroom);

School.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  symbol: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { sequelize });

export default School;