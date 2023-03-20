import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey } from 'sequelize';
import { sequelize } from '@/config/database';
import Teacher from './Teacher';
import Classroom from './Classroom';

class TeacherClassroom extends Model<InferAttributes<TeacherClassroom>, InferCreationAttributes<TeacherClassroom>> {
  declare id: number;
  declare teacherId: ForeignKey<number>;
  declare classroomId: ForeignKey<number>;
}

TeacherClassroom.belongsTo(Teacher);
TeacherClassroom.belongsTo(Classroom);

TeacherClassroom.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  }
}, { sequelize });

export default TeacherClassroom;