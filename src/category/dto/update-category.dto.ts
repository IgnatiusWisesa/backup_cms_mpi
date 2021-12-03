import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateCateogryDTO {
  @ApiProperty()
  @Prop()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @Prop()
  parent?: string;

  @ApiProperty()
  @Prop()
  level?: number;
}
