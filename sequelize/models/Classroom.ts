import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey } from 'sequelize';
import { sequelize } from '@/config/database';
import School from './School';

class Classroom extends Model<InferAttributes<Classroom>, InferCreationAttributes<Classroom>> {
  declare id: number;
  declare name: string;
  declare capacity: number;
  declare blocked: boolean;
  declare schedule: string;
  declare protocol: string;
  declare schoolId: ForeignKey<number>;
}

Classroom.belongsTo(School);

Classroom.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  blocked: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  schedule: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  protocol: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { sequelize });

export default Classroom;