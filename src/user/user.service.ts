import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()

export class UserService{
      constructor (@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}
      async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
          const newUser = new UserEntity();
          Object.assign(newUser, createUserDto);
                 
            return await this.userRepository.save(newUser);
      }
      buildUserResponse(user: UserEntity): any {
            return {
                  user: {
                        ...user
                  }
            }
      }
}
