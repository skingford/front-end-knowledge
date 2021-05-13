/*
 * @Author: kingford
 * @Date: 2021-05-13 16:08:14
 * @LastEditTime: 2021-05-13 17:39:42
 */
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dtos/cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../exception/forbidden.exception';
import { HttpExceptionFilter } from '../exception/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  //@UseFilters(new HttpExceptionFilter())
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    // throw new NotFoundException();
    throw new ForbiddenException();
    //return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
