import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleEntity } from './example.entity';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private exampleRepository: Repository<ExampleEntity>,
  ) {}

  findAll(): Promise<ExampleEntity[]> {
    return this.exampleRepository.find();
  }

  findOne(id: string): Promise<ExampleEntity> {
    return this.exampleRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.exampleRepository.delete(id);
  }
}
