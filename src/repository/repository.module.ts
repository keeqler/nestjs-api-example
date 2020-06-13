import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RepositoryService } from './repository.service';

import { Author } from '~/resources/authors/authors.entity';
import { Post } from '~/resources/posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Post])],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class DatabaseModule {}
