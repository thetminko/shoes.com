import { Sequelize } from 'sequelize-typescript';
import allEntities from '../entities';

let sequelize: Sequelize;

export const initSequelize = async (): Promise<void> => {
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 43306,
    username: 'root',
    password: 'root_password',
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

  sequelize.addModels(allEntities);
  await sequelize.authenticate();
};

export const getSequelize = (): Sequelize => sequelize;
