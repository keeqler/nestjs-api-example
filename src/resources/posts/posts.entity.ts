import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Author } from '~/resources/authors/authors.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  authorId: number;

  @Column('varchar', { length: 30 })
  title: string;

  @Column('varchar', { length: 255 })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Author, author => author.posts)
  author: Promise<Author>;
}
