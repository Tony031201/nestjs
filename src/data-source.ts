import { DataSource,DataSourceOptions } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'sqlite', // 替换为你的数据库类型
  database: 'db.sqlite', // 替换为你的数据库路径
  entities: ['**/*.entity.js'], // 替换为你的实体文件路径
  migrations: [__dirname + '/migrations/*.ts'], // 替换为你的迁移文件路径
} as DataSourceOptions); 
