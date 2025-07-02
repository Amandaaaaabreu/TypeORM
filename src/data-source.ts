// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/database/migrations/*.ts'],
});
