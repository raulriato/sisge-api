import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from '@/config/database';
import TeacherClassroom from './TeacherClassroom';

class Teacher extends Model<InferAttributes<Teacher>, InferCreationAttributes<Teacher>> {
  declare id: number;
  declare name: string;
}

Teacher.hasMany(TeacherClassroom);

Teacher.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize });

export default Teacher;