import { Module } from '@nestjs/common';

import { DatabaseModule } from '~/repository/repository.module';

import { AuthorService } from '~/resources/authors/authors.service';

import { PostController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService, AuthorService],
})
export class PostModule {}
