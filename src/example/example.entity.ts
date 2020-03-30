import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entities')
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
