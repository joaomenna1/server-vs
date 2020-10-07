import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePositionUsers1602031376437
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'POS_POSITION',
        columns: [
          {
            name: 'POS_ID',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'POS_NAME',
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
    queryRunner.dropTable('POS_POSITION');
  }
}
