import { Post } from '~/database/entities/post.entity';

export interface CreatePostData {
  authorId: number;
  title: string;
  text: string;
}

export interface FindPostsWhere {
  authorId?: number;
}

export interface FindPostsResult {
  posts: Post[];
  count: number;
}

export interface FindPostInput {
  id?: number;
  authorId?: number;
}
