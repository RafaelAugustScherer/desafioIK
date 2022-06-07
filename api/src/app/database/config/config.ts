import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: `${process.env.MYSQL_DATABASE}`,
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: 'postgres',
  dialectOptions: {
    timezone: '-03:00',
  },
};

module.exports = config;