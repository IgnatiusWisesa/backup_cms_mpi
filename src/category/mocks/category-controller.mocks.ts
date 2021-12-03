import {
  ArrayOfObjecCategory,
  SuccsessCreateCategory,
  SuccsessCreateCategoryWithNoParent,
} from './category-payload.mocks';

export const CategoryControllerMock = {
  // ==================================== controller ====================================
  create: jest.fn().mockImplementation((dto) => { return { id: expect.anything(), ...dto } }),
  findOne: jest.fn().mockImplementation((id) => { 
    if( id.id == '234' ) return { id, ...SuccsessCreateCategoryWithNoParent }
    return { id, ...SuccsessCreateCategory } }),
  find: jest.fn().mockImplementation(() => { return ArrayOfObjecCategory }),
  findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => { return { id: id.id, ...dto } }),
  findByIdAndDelete: jest.fn().mockImplementation((id) => { return { id: id.id, ...SuccsessCreateCategory } })
};
