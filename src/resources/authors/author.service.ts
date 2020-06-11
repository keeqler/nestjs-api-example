import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { RepositoryService } from '~/repository/repository.service';

import { Author } from '~/database/entities/author.entity';

import { FindAuthorData, CreateAuthorData } from './author.interface';

@Injectable()
export class AuthorService {
  authorRepository: Repository<Author>;

  constructor(private readonly repositoryService: RepositoryService) {
    this.authorRepository = this.repositoryService.authorRepository;
  }

  async createAuthor(data: CreateAuthorData): Promise<Author> {
    const author = this.authorRepository.create(data);

    return await this.authorRepository.save(author);
  }

  async findAuthor(where: FindAuthorData): Promise<Author> | null {
    return await this.authorRepository.findOne({ where });
  }
}
