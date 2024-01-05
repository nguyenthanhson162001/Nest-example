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
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cat.dto';
import { CatService } from './cats.service';
import { createCatSchema } from './cat.zod.schema';
import { ZodValidationPipe } from 'src/common/validation/zod.validation.pipe';
@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}
  // genderate the same CURD with examble below

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    throw new HttpException({ query }, HttpStatus.INTERNAL_SERVER_ERROR);
    return this.catService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
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
