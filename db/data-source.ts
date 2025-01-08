import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite', // 替换为你的数据库类型
  database: 'db.sqlite', // 替换为你的数据库路径
  entities: ['dist/**/*.entity.js'], // 替换为你的实体文件路径
  migrations: ['dist/migrations/*.js'], // 替换为你的迁移文件路径
  synchronize: false,
});

export default AppDataSource;