import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PS_USERNAME,
  password: process.env.PS_PASSWORD,
  database: `${process.env.PS_DATABASE}`,
  host: process.env.PS_HOST || 'localhost',
  port: Number(process.env.PS_PORT) || 5432,
  dialect: 'postgres',
  dialectOptions: {
    timezone: '-03:00',
  },
};

module.exports = config;