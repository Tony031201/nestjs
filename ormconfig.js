const path = require('path')

var dbConfig = {
    synchronize: false,
    migrations: ['migrations/*.js'],
    cli:{
        migrationsDir:'migrations',
    },
};

switch (process.env.NODE_ENV){
    case 'development':
        Object.assign(dbConfig,{
            type:'sqlite',
            database:'db.sqlite',
            entities: ['**/*.entity.js']
        });
        break;
    case 'test':
        Object.assign(dbConfig,{
            type:'sqlite',
            database:'test.sqlite',
            entities: ['**/*.entity.ts']
        });
        break;
    case 'production':
        console.log('In production env')
        Object.assign(dbConfig,{
            type:'postgres',
            url:process.env.DATABASE_URL,
            migrationsRun:true,
            entities: [path.join(__dirname, '**/*.entity.js')],
            migrations: [path.join(__dirname, 'migrations/*.js')],
            ssl:{
                rejectUnauthorized:false 
            },
        });
        break;
    default:
        console.log('ormconfig.js said: in ',process.env.NODE_ENV)
        throw new Error('unknown environment: ',process.env.NODE_ENV);
};

console.log('CLI Migration Directory:', dbConfig.cli.migrationsDir);
console.log('Loaded environment:', process.env.NODE_ENV);
console.log('Database configuration:', dbConfig);

module.exports = dbConfig
// {
//     type: 'postgres',
//     url: process.env.DATABASE_URL,
//     synchronize: false, // 生产环境禁用自动同步
//     migrationsRun: true, // 自动运行迁移
//     entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
//     migrations: [path.join(__dirname, '**/migrations/*{.ts,.js}')],
//     ssl: {
//         rejectUnauthorized: false, // 允许自签名证书
//     },
// };

