import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {getConnection, Repository } from 'typeorm';

import { BaseService } from 'src/core/lib';

import { User } from './entities/user.entity';
import { UserInputDto } from './dto/user.dto';

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

  async createListUsers(users: UserInputDto[]) {
    const queryRunner = getConnection().createQueryRunner();

    try {
      for(const user of users){
          await this.create(user, queryRunner);
      }
  
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
        await queryRunner.release();
    }
  }
}
