import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MeasurementDocument = Measurement & Document;

@Schema()
export class Measurement {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  vendor_id: string;

  @ApiProperty()
  @Prop()
  smallest_unit_id: string;

  @ApiProperty()
  @Prop()
  comparison_to_smallest: number;
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);
