import { User } from '../entities';

class UserService {

  async find(): Promise<string> {
    const user = await User.findOne({ where: { id: 1 } });
    return user?.name;
  }

  async update(): Promise<string> {
    const user = await User.findOne({ where: { id: 1 } });
    user.name = 'ABC2';
    await user.save();
    return user.name;
  }

}

export const userService = new UserService();
