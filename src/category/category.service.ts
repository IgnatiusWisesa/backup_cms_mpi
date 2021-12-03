import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateCateogryDTO } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schema/category.schema';

@Injectable()
export class CategoryService {

    constructor(
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
      ) {}

    async create(body: CreateCategoryDTO): Promise<Category> {
        return this.categoryModel.create(body);
    }

    async update(id: IdDTO, body: UpdateCateogryDTO): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate(id, body);
    }

    async findById(id: any): Promise<Category> {
        return this.categoryModel.findOne(id);
    }

    async find(condition): Promise<Category[]> {
        return this.categoryModel.find(condition);
    }

    async delete(id: IdDTO): Promise<Category> {
        return this.categoryModel.findByIdAndDelete(id);
    }
    
}
