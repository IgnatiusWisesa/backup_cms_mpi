const stringId = 'id';
const numberId = 1;

export const StringMockId = stringId;

export const MockId = {
  id: stringId,
};

export const MeasurementPayload = {
  name: "pack",
  vendor_id: "vendor001",
  smallest_unit_id: "123",
  comparison_to_smallest: 20
};

export const SuccsessCreateMeasurement = {
  id: stringId,
  name: "pack",
  vendor_id: "vendor001",
  smallest_unit_id: "123",
  comparison_to_smallest: 20
};

export const SuccsessGetMeasurementById = (id) => {
  return {
    id,
    name: "pack",
    vendor_id: "vendor001",
    smallest_unit_id: "123",
    comparison_to_smallest: 20
  };
};

export const SuccsessUpdateMeasurement = (id) => {
  return {
    id: id,
    name: "pack",
    vendor_id: "vendor001",
    smallest_unit_id: "123",
    comparison_to_smallest: 20
  };
};

export const ArrayOfObjecMeasurement = [
  {
    _id: '234',
    name: "pack",
    vendor_id: "vendor001",
    smallest_unit_id: "123",
    comparison_to_smallest: 20
  },
  {
    _id: '123',
    name: "kaleng",
    vendor_id: "vendor001",
    smallest_unit_id: null,
    comparison_to_smallest: 1
  },
];
