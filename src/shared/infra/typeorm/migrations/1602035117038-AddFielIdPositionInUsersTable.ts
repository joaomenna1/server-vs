import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddFielIdPositionInUsersTable1602035117038
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'US_USERS',
      new TableForeignKey({
        name: 'UsersPosition',
        columnNames: ['POS_ID'],
        referencedColumnNames: ['POS_ID'],
        referencedTableName: 'POS_POSITION',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UsersPosition');
  }
}
