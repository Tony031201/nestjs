import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class InitialSchema1736252196935 implements MigrationInterface {
    name = 'InitialSchema1736252196935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'user',
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
            })
        )

        await queryRunner.createTable(
            new Table({
                name:'history',
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
                        type: 'datetime',
                        generationStrategy: 'increment',
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ""user""`);
        await queryRunner.query(`DROP TABLE ""history""`);
    }

}
