import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import { classToClass } from 'class-transformer';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { email, name, oldPassword, password } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);

    const UpdateUser = await updateProfile.execute({
      user_id,
      email,
      name,
      oldPassword,
      password,
    });

    delete UpdateUser?.password;

    return response.status(200).json(classToClass(UpdateUser));
  }
}
