import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsOptional()
  @IsMongoId()
  @IsOptional()
  _id?: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  parent?: string;

  @ApiProperty()
  @Prop()
  level?: number;
}
