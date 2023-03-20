import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey } from 'sequelize';
import { sequelize } from '@/config/database';
import User from './User';

class Session extends Model<InferAttributes<Session>, InferCreationAttributes<Session>> {
  declare id: number;
  declare token: string;
  declare active: boolean;
  declare userId: ForeignKey<number>;
}

Session.belongsTo(User);

Session.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, { sequelize });

export default Session;