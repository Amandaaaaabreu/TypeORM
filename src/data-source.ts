// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(__dirname, 'database', 'database.sqlite'),
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/database/migrations/*.ts'],
});

