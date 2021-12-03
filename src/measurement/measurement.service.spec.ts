import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementService } from './measurement.service';
import { MeasurementPayload, MockId, StringMockId, SuccsessCreateMeasurement, SuccsessUpdateMeasurement, SuccsessGetMeasurementById, ArrayOfObjecMeasurement } from './mocks/measurement-payload.mocks';
import { MeasurementServiceMock } from './mocks/measurement-service.mocks';
import { Measurement } from './schema/measurement.schema';

describe('MeasurementService', () => {
  let service: MeasurementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeasurementService,
        {
          provide: getModelToken(Measurement.name),
          useValue: MeasurementServiceMock,
        },
      ],
    }).compile();

    service = module.get<MeasurementService>(MeasurementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a measurement', async () => {
    expect(await service.create(MeasurementPayload)).toEqual(SuccsessCreateMeasurement);
  });

  it('should update a measurement', async () => {
    expect(await service.update(MockId,MeasurementPayload)).toEqual(SuccsessUpdateMeasurement(StringMockId));
  });

  it('should get a measurement', async () => {
    expect(await service.findById(MockId)).toEqual(SuccsessGetMeasurementById(StringMockId));
  });

  it('should get list of measurements', async () => {
    expect(await service.find({})).toEqual(ArrayOfObjecMeasurement);
  });

  it('should delete a measurement', async () => {
    expect(await service.delete(MockId)).toEqual(SuccsessGetMeasurementById(StringMockId));
  });
});
