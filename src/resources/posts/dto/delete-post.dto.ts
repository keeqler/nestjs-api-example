import { IsNotEmpty, IsInt, Min, MaxLength, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class DeletePostParamsDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  readonly id: number;
}

export class DeletePostHeadersDto {
  readonly 'x-author': string;
}
