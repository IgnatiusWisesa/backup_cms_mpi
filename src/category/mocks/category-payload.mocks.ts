const stringId = 'id';
const numberId = 1;

export const StringMockId = stringId;

export const MockId = {
  id: stringId,
};

export const CategoryPayload = {
  name: "microwave",
  parent: "234"
};

export const CategoryPayloadNoParent = {
  name: "electronic"
};

export const CategoryPayloadService = {
  name: "microwave",
  parent: "234",
  level: 1
};

export const SuccsessCreateCategory = {
  id: stringId,
  name: "microwave",
  parent: "234",
  level: 1
};

export const SuccsessCreateCategoryWithNoParent = {
  id: stringId,
  name: "electronic",
  level: 0
};

export const SuccsessGetCategoryById = (id) => {
  return {
    id,
    name: "microwave",
    parent: "234",
    level: 1
  };
};

export const SuccsessUpdateCategory = (id) => {
  return {
    id: id,
    name: "microwave",
    parent: "234",
    level: 1
  };
};

export const SuccsessUpdateCategoryWithNoParent = (id) => {
  return {
    id: id,
    name: "electronic",
    level: 0
  };
};

export const ArrayOfObjecCategory = [
  {
    _id: '123',
    name: "microwave",
    parent: "234",
    level: 1
  },
  {
    _id: '234',
    name: "electronic",
    parent: null,
    level: 0
  },
  {
    _id: '456',
    name: "tv",
    parent: "234",
    level: 1
  },
];
