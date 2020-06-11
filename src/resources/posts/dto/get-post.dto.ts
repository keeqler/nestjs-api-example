import { IsNotEmpty, IsInt, Min, IsNumberString } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetPostQueryDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  readonly id: number;
}
