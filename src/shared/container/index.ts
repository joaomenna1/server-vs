import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUsersRepository>(
  'usersRepository',
  UsersRepository,
);
