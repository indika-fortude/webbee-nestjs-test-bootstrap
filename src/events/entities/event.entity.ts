import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;

  @ManyToMany(() => Workshop, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  workshops: Workshop[];
}
