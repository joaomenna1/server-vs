import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserTokens1602031648630
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'USRT_USERS_TOKENS',
        columns: [
          {
            name: 'USRT_ID',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'USRT_TOKEN',
            type: 'varchar',
          },
          {
            name: 'US_ID',
            type: 'int',
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
        foreignKeys: [
          {
            name: 'UserId',
            columnNames: ['US_ID'],
            referencedColumnNames: ['US_ID'],
            referencedTableName: 'US_USERS',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('USRT_USERS_TOKENS');
  }
}
