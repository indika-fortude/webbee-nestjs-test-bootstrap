import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'integer', default: null })
  parentId: number;

  @Column({ type: 'datetime' })
  createdAt: string;

  @ManyToOne(() => MenuItem, (child) => child.children)
  @JoinColumn({ name: 'parentId' })
  parent: MenuItem;

  @OneToMany(() => MenuItem, (parent) => parent.parent)
  children: MenuItem[];
}
