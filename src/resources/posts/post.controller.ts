import { Controller, Body, Headers, Res, Post, Get, Query, Param } from '@nestjs/common';
import { Response, response } from 'express';

import { AuthorService } from '~/resources/authors/author.service';

import { CreatePostHeadersDto, CreatePostBodyDto } from './dto/create-post.dto';
import { FindPostsQueryDto } from './dto/find-posts.dto';
import {
  ListPostsByAuthorParamsDto,
  ListPostsByAuthorQueryDto,
} from './dto/list-posts-by-author.dto';

import { PostService } from './post.service';

@Controller('authors')
export class PostController {
  constructor(private authorService: AuthorService, private postService: PostService) {}

  @Post('/posts')
  async createPost(
    @Headers() headers: CreatePostHeadersDto,
    @Body() body: CreatePostBodyDto,
    @Res() response: Response
  ) {
    const authorName = headers['x-author'];
    const { title, text } = body;

    const author = await this.authorService.findAuthor({ name: authorName });

    if (!author) {
      return response.status(400).send({ error: 'unexistentAuthor' });
    }

    await this.postService.createPost({ authorId: author.id, title, text });

    return response.sendStatus(201);
  }

  @Get('/posts')
  async listPosts(@Query() query: FindPostsQueryDto, @Res() response: Response): Promise<Response> {
    const { posts, count } = await this.postService.findPosts(query.page);

    return response.header('X-Total-Count', count.toString()).send(posts);
  }

  @Get(':authorId/posts')
  async listPostsByAuthor(
    @Param() params: ListPostsByAuthorParamsDto,
    @Query() query: ListPostsByAuthorQueryDto,
    @Res() response: Response
  ): Promise<Response> {
    const { posts, count } = await this.postService.findPosts(query.page, {
      authorId: params.authorId,
    });

    return response.header('X-Total-Count', count.toString()).send(posts);
  }
}
