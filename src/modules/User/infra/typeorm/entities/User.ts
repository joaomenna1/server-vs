import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('US_USERS')
class User {
  @PrimaryGeneratedColumn()
  US_ID: string;
}

export default User;
