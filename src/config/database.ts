import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

const path = '.env.development';

dotenv.config({ path });

export const sequelize = new Sequelize({
  database: process.env.MYSQL_DB,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});