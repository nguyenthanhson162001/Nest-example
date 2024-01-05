import {
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateDogDto, ListAllEntities, UpdateDogDto } from './dogs.dto';
import { DogService } from './dogs.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  // genderate the same CURD with examble below

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return this.dogService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogService.remove(id);
  }
}
