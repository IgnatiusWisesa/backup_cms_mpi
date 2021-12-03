import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeasurementDTO } from './dto/create-measurement.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateMeasurementDTO } from './dto/update-measurement.dto';
import { Measurement, MeasurementDocument } from './schema/measurement.schema';

@Injectable()
export class MeasurementService {

    constructor(
        @InjectModel(Measurement.name) private measurementModel: Model<MeasurementDocument>,
      ) {}

    async create(body: CreateMeasurementDTO): Promise<Measurement> {
        return this.measurementModel.create(body);
    }

    async update(id: IdDTO, body: UpdateMeasurementDTO): Promise<Measurement> {
        return this.measurementModel.findByIdAndUpdate(id, body);
    }

    async findById(id: any): Promise<Measurement> {
        return this.measurementModel.findOne(id);
    }

    async find(condition): Promise<Measurement[]> {
        return this.measurementModel.find(condition);
    }

    async delete(id: IdDTO): Promise<Measurement> {
        return this.measurementModel.findByIdAndDelete(id);
    }

}
