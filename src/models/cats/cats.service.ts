import { Injectable } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cat.dto';

@Injectable()
export class CatService {
  getHello(): { message: string } {
    return { message: 'Cat hello' };
  }

  create(createCatDto: CreateCatDto) {
    return `This action adds a new cat ${createCatDto.name}`;
  }

  findAll(query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cat`;
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat ${updateCatDto.name}`;
  }

  remove(id: string) {
    return `This action removes a #${id} cat`;
  }
}
