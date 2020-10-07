import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1602030450859 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'US_USERS',
        columns: [
          {
            name: 'US_ID',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'POS_ID',
            type: 'int',
          },
          {
            name: 'US_NAME',
            type: 'varchar',
          },
          {
            name: 'US_EMAIL',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'US_PASSWORD',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('US_USERS');
  }
}
