import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleEntity } from './example.entity';

@Controller('examples')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Post()
  create(@Body() createExample: ExampleEntity) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ExampleEntity[]) {
    console.log('hi')
    return `This action returns all cats (limit: ${query.length} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: ExampleEntity) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
