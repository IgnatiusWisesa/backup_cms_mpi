import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateMeasurementDTO } from './dto/create-measurement.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateMeasurementDTO } from './dto/update-measurement.dto';
import { MeasurementService } from './measurement.service';
import { Measurement } from './schema/measurement.schema';

@ApiTags('Measurement')
@Controller('measurement')
export class MeasurementController {

    constructor(private readonly measurementService: MeasurementService) {}

    @ApiCreatedResponse({ type: Measurement, description: 'post a measurement' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Post()
    async create(@Body() body: CreateMeasurementDTO): Promise<Measurement> {
        return this.measurementService.create(body);
    }

    @ApiCreatedResponse({ type: Measurement, description: 'update a measurement' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Put(':id')
    async update(
        @Param('id') id: IdDTO,
        @Body() body: UpdateMeasurementDTO,
    ): Promise<Measurement> {
        return this.measurementService.update(id, body);
    }

    @ApiOkResponse({ type: Measurement, description: 'get a measurement by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Get(':id')
    async findById(@Param('id') id: IdDTO): Promise<Measurement> {
        return this.measurementService.findById(id);
    }

    @ApiOkResponse({ type: [Measurement], description: 'get measurements' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiQuery({ name: 'queries', required: false })
    @Get()
    async find(@Query() queries: object): Promise<Measurement[]> {

        let condition = {}
        if(queries['name']) condition['name'] = queries['name']
        if(queries['vendor_id']) condition['vendor_id'] = queries['vendor_id']
        if(queries['smallest_unit_id']) condition['smallest_unit_id'] = queries['smallest_unit_id']

        return this.measurementService.find(condition);
    }

    @ApiOkResponse({ type: Measurement, description: 'delete a measurement by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Delete(':id')
    async delete(@Param('id') id: IdDTO): Promise<Measurement> {
        return this.measurementService.delete(id);
    }

}
