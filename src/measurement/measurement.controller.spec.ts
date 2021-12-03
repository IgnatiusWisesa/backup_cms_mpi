import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';
import { MeasurementControllerMock } from './mocks/measurement-controller.mocks';
import { ArrayOfObjecMeasurement, MeasurementPayload, MockId, StringMockId, SuccsessCreateMeasurement, SuccsessGetMeasurementById, SuccsessUpdateMeasurement } from './mocks/measurement-payload.mocks';
import { Measurement } from './schema/measurement.schema';

describe('MeasurementController', () => {
  let controller: MeasurementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeasurementController],
      providers: [
        MeasurementService,
        {
          provide: getModelToken(Measurement.name),
          useValue: MeasurementControllerMock,
        },
      ],
    }).compile();

    controller = module.get<MeasurementController>(MeasurementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`should create a measurement (Controller)`, async () => {
    expect(await controller.create(MeasurementPayload)).toEqual(SuccsessCreateMeasurement)
  })

  it(`should update a measurement (Controller)`, async () => {
    expect(await controller.update(MockId, MeasurementPayload)).toEqual(SuccsessUpdateMeasurement(StringMockId))
  })

  it(`should get a measurement (Controller)`, async () => {
    expect(await controller.findById(MockId)).toEqual(SuccsessGetMeasurementById(StringMockId))
  })

  it(`should get a list of measurements with queries(Controller)`, async () => {
    expect(await controller.find({
      name: 'pack',
      vendor_id: 'vendor001',
      smallest_unit_id: 20
    })).toEqual(ArrayOfObjecMeasurement)
  })

  it(`should get a list of measurements without queries(Controller)`, async () => {
    expect(await controller.find({})).toEqual(ArrayOfObjecMeasurement)
  })

  it(`should delete a measurement (Controller)`, async () => {
    expect(await controller.delete(MockId)).toEqual(SuccsessGetMeasurementById(StringMockId))
  })
});
