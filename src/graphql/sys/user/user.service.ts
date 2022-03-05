import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository } from 'typeorm';

import { BaseService } from 'src/core/lib';

import { User } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly engineRepository: Repository<User>,
  ) {
    super(engineRepository);

    this.modelClass = User;
  }

  async findOneByUserName(username: string): Promise<User> {
    const base = await this.engineRepository.findOne({
      username,
    });

    return base;
  }
}
