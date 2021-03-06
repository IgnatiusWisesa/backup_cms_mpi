import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  parent: string;

  @ApiProperty()
  @Prop()
  level: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
