import {
  ArrayOfObjecMeasurement,
  SuccsessCreateMeasurement,
} from './measurement-payload.mocks';

export const MeasurementServiceMock = {
  // ==================================== controller ====================================
  create: jest.fn().mockImplementation((dto) => { return { id: expect.anything(), ...dto } }),
  findOne: jest.fn().mockImplementation((id) => { return { id, ...SuccsessCreateMeasurement } }),
  find: jest.fn().mockImplementation(() => { return ArrayOfObjecMeasurement }),
  findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => { return { id: id.id, ...dto } }),
  findByIdAndDelete: jest.fn().mockImplementation((id) => { return { id: id.id, ...SuccsessCreateMeasurement } })
};
