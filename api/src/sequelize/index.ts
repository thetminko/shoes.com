import { Sequelize } from 'sequelize-typescript';
import db from '../db.json';
import allEntities from '../entities';
let sequelize: Sequelize;

export const initSequelize = async (): Promise<void> => {
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: db.username,
    password: db.password,
    database: 'shoes',
    define: {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    },
    pool: {
      min: 0,
      max: 10,
      acquire: 20000,
      idle: 10000,
      evict: 1000
    },
    timezone: '+08:00'
  });

  sequelize.sync();
  sequelize.addModels(allEntities);
  await sequelize.authenticate();
};

export const getSequelize = (): Sequelize => sequelize;
