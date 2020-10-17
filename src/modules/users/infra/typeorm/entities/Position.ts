import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'POS_POSITION' })
class Position {
  @PrimaryGeneratedColumn('increment', { name: 'POS_ID' })
  id: number;

  @Column({ name: 'POS_NAME' })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Position;
