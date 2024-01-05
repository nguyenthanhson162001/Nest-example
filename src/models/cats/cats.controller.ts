import {
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Put,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cat.dto';
import { CatService } from './cats.service';
@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}
  // genderate the same CURD with examble below

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    throw new HttpException({ query }, HttpStatus.INTERNAL_SERVER_ERROR);
    return this.catService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(id);
  }
}
