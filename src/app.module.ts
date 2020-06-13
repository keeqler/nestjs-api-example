import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { sqliteOptions } from '~/config/database';

import { AuthorModule } from './resources/authors/authors.module';
import { PostModule } from './resources/posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(sqliteOptions), AuthorModule, PostModule],
})
export class AppModule {}
