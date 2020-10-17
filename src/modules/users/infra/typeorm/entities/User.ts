import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'US_USERS' })
class User {
  @PrimaryGeneratedColumn('increment', { name: 'US_ID' })
  id: string;

  @Column({ name: 'POS_ID' })
  posId: number;

  @Column({ name: 'US_NAME' })
  name: string;

  @Column({ name: 'US_EMAIL' })
  email: string;

  @Column({ name: 'US_PASSWORD' })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default User;
