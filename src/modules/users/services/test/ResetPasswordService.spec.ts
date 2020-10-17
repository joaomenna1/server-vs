import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import FakeUsersTokensRepository from '../../repositories/fakes/FakeUsersTokensRepository';
import FakeHasProvider from '../../providers/hashProvider/fakes/FakeHashProvider';
import ResetPasswordService from '../ResetPasswordService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUsersTokensRepository: FakeUsersTokensRepository;
let resetPassword: ResetPasswordService;
let fakeHashProvider: FakeHasProvider;

describe('ResetPasswordForgot', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    fakeHashProvider = new FakeHasProvider();

    resetPassword = new ResetPasswordService(
      fakeUsersRepository,
      fakeUsersTokensRepository,
      fakeHashProvider
    );
  });

  it('should be able reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456',
    });

    const { token } = await fakeUsersTokensRepository.generate(user.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

    await resetPassword.execute({
      password: '123123',
      token,
    });

    const updateUser = await fakeUsersRepository.findById(user.id);

    expect(generateHash).toHaveBeenCalledWith('123123');
    expect(updateUser?.password).toBe('123123');
  });

  it('should not be able to reset the password with no-existing token', async () => {
    expect(
      resetPassword.execute({
        token: 'non-existing token',
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to reset the password with no-existing user', async () => {
    const { token } = await fakeUsersTokensRepository.generate(
      'no-existing-user'
    );

    expect(
      resetPassword.execute({
        token,
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shout not be able to reset passoword if passed more than 2 hours', async () => {
    const user = await fakeUsersRepository.create({
      email: 'teste@gmail.com',
      name: 'teste',
      password: '123123',
    });

    const { token } = await fakeUsersTokensRepository.generate(user.id);

    jest.spyOn(Date, 'now').mockImplementation(() => {
      const customDate = new Date();

      return customDate.setHours(customDate.getHours() + 3);
    });

    await expect(
      resetPassword.execute({
        password: '123123',
        token,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
