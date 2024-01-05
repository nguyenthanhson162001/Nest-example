import { Injectable } from '@nestjs/common';
import { CreateDogDto, ListAllEntities, UpdateDogDto } from './dogs.dto';

@Injectable()
export class DogService {
  getHello(): { message: string } {
    return { message: 'Dog hello' };
  }

  create(createDogDto: CreateDogDto) {
    return `This action adds a new Dog ${createDogDto.name}`;
  }

  findAll(query: ListAllEntities) {
    return `This action returns all Dogs (limit: ${query.limit} items)`;
  }

  findOne(id: string) {
    return `This action returns a #${id} Dog`;
  }

  update(id: string, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} Dog ${updateDogDto.name}`;
  }

  remove(id: string) {
    return `This action removes a #${id} Dog`;
  }
}
