import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { ArrayOfObjecCategory, CategoryPayloadService, MockId, StringMockId, SuccsessCreateCategory, SuccsessGetCategoryById, SuccsessUpdateCategory } from './mocks/category-payload.mocks';
import { CategoryServiceMock } from './mocks/category-service.mocks';
import { Category } from './schema/category.schema';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getModelToken(Category.name),
          useValue: CategoryServiceMock,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a category', async () => {
    expect(await service.create(CategoryPayloadService)).toEqual(SuccsessCreateCategory);
  });

  it('should update a category', async () => {
    expect(await service.update(MockId,CategoryPayloadService)).toEqual(SuccsessUpdateCategory(StringMockId));
  });

  it('should get a category', async () => {
    expect(await service.findById(MockId)).toEqual(SuccsessGetCategoryById(StringMockId));
  });

  it('should get list of categories', async () => {
    expect(await service.find({})).toEqual(ArrayOfObjecCategory);
  });

  it('should delete a category', async () => {
    expect(await service.delete(MockId)).toEqual(SuccsessGetCategoryById(StringMockId));
  });
});
