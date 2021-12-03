import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateMeasurementDTO {
  @ApiProperty()
  @Prop()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @Prop()
  @IsOptional()
  vendor_id?: string;

  @ApiProperty()
  @Prop()
  @IsOptional()
  smallest_unit_id?: string;

  @ApiProperty()
  @Prop()
  @IsOptional()
  comparison_to_smallest?: number;
}
