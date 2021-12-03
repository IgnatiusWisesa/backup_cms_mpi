import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional } from 'class-validator';

export class CreateMeasurementDTO {
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
  vendor_id?: string;

  @ApiProperty()
  @Prop()
  smallest_unit_id?: string;

  @ApiProperty()
  @Prop()
  comparison_to_smallest?: number;
}
