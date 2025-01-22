"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1736252196935 = void 0;
const typeorm_1 = require("typeorm");
class InitialSchema1736252196935 {
    constructor() {
        this.name = 'InitialSchema1736252196935';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'username',
                    type: 'varchar',
                }
            ]
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'history',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'time',
                    type: 'timestamp',
                    isNullable: false, 
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'question',
                    type: 'varchar',
                },
                {
                    name: 'answer',
                    type: 'varchar',
                },
                {
                    name: 'userId',
                    type: 'varchar',
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE ""user""`);
        await queryRunner.query(`DROP TABLE ""history""`);
    }
}
exports.InitialSchema1736252196935 = InitialSchema1736252196935;
//# sourceMappingURL=1736252196935-initial-schema.js.map