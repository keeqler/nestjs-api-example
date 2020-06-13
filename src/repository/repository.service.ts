import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Author } from '~/resources/authors/authors.entity';
import { Post } from '~/resources/posts/posts.entity';

@Injectable()
export class RepositoryService {
  public constructor(
    @InjectRepository(Author) public readonly authorRepository: Repository<Author>,
    @InjectRepository(Post) public readonly postRepository: Repository<Post>
  ) {}
}
