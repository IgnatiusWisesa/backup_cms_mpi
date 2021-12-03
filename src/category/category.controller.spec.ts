import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryControllerMock } from './mocks/category-controller.mocks';
import { ArrayOfObjecCategory, CategoryPayload, CategoryPayloadNoParent, MockId, StringMockId, SuccsessCreateCategory, SuccsessCreateCategoryWithNoParent, SuccsessGetCategoryById, SuccsessUpdateCategory, SuccsessUpdateCategoryWithNoParent } from './mocks/category-payload.mocks';
import { Category } from './schema/category.schema';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        CategoryService,
        {
          provide: getModelToken(Category.name),
          useValue: CategoryControllerMock,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`should create a category (Controller)`, async () => {
    expect(await controller.create(CategoryPayload)).toEqual(SuccsessCreateCategory)
  })
  
  it(`should create a category with no parent parameter (Controller)`, async () => {
    expect(await controller.create(CategoryPayloadNoParent)).toEqual(SuccsessCreateCategoryWithNoParent)
  })

  it(`should update a category (Controller)`, async () => {
    expect(await controller.update(MockId, CategoryPayload)).toEqual(SuccsessUpdateCategory(StringMockId))
  })

  it(`should update a category with no parent parameter (Controller)`, async () => {
    expect(await controller.update(MockId, CategoryPayloadNoParent)).toEqual(SuccsessUpdateCategoryWithNoParent(StringMockId))
  })

  it(`should get a category (Controller)`, async () => {
    expect(await controller.findById(MockId)).toEqual(SuccsessGetCategoryById(StringMockId))
  })

  it(`should get a list of categories with queries(Controller)`, async () => {
    expect(await controller.find({
      name: 'tv',
      parent: '234',
      level: 1
    })).toEqual(ArrayOfObjecCategory)
  })

  it(`should get a list of categories without queries(Controller)`, async () => {
    expect(await controller.find({})).toEqual(ArrayOfObjecCategory)
  })

  it(`should delete a category (Controller)`, async () => {
    expect(await controller.delete(MockId)).toEqual(SuccsessGetCategoryById(StringMockId))
  })
});
