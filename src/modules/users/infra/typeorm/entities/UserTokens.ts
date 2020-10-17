import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity({ name: 'USRT_USERS_TOKENS' })
class UserToken {
  @PrimaryGeneratedColumn('increment', { name: 'USRT_ID' })
  id: number;

  @Column({ name: 'US_ID' })
  user_id: number;

  @Column()
  @Generated('uuid')
  token: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default UserToken;
