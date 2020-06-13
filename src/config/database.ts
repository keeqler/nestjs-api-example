import { resolve } from 'path';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const sqliteOptions: SqliteConnectionOptions = {
  type: 'sqlite',
  database: resolve(__dirname, '..', 'tmp', 'database.sqlite'),
  entities: [resolve(__dirname, '..', 'resources', '*', '*.entity.{ts,js}')],
  migrations: [resolve(__dirname, '..', 'repository', 'migrations', '*')],
  subscribers: [resolve(__dirname, '..', 'repository', 'subscribers', '*')],
  synchronize: false,
};
