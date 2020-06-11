import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { RepositoryService } from '~/repository/repository.service';

import { Post } from '~/database/entities/post.entity';

import { CreatePostData, FindPostsWhere, FindPostsResult } from './post.interface';

@Injectable()
export class PostService {
  private readonly postRepository: Repository<Post>;

  constructor(private readonly repositoryService: RepositoryService) {
    this.postRepository = this.repositoryService.postRepository;
  }

  public async createPost(data: CreatePostData): Promise<Post> {
    const post = this.postRepository.create(data);

    return await this.postRepository.save(post);
  }

  public async findPosts(page: number, where: FindPostsWhere = {}): Promise<FindPostsResult> {
    const [posts, count] = await this.postRepository.findAndCount({
      where,
      take: 10,
      skip: (page - 1) * 10,
    });

    return { posts, count };
  }
}
