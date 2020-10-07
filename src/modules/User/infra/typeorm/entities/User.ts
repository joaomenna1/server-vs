import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('US_USERS')
class User {
  @PrimaryGeneratedColumn('increment')
  US_ID: string;
}

export default User;
