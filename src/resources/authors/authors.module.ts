import { Module } from '@nestjs/common';

import { DatabaseModule } from '~/repository/repository.module';

import { AuthorController } from './authors.controller';
import { AuthorService } from './authors.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
