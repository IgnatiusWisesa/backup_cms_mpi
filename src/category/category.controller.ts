import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateCateogryDTO } from './dto/update-category.dto';
import { Category } from './schema/category.schema';

@ApiTags('Category')
@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}

    @ApiCreatedResponse({ type: Category, description: 'post a category' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Post()
    async create(@Body() body: CreateCategoryDTO): Promise<Category> {

        if( body.parent ) {
            var parent = await this.findById({id: body.parent})
            body.level = parent.level + 1
        } else body.level = 0

        return this.categoryService.create(body);
    }

    @ApiCreatedResponse({ type: Category, description: 'update a category' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Put(':id')
    async update(
        @Param('id') id: IdDTO,
        @Body() body: UpdateCateogryDTO,
    ): Promise<Category> {

        if( body.parent ) {
            var parent = await this.findById({id: body.parent})
            body.level = parent.level + 1
        } else body.level = 0

        return this.categoryService.update(id, body);
    }

    @ApiOkResponse({ type: Category, description: 'get a category by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Get(':id')
    async findById(@Param('id') id: IdDTO): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @ApiOkResponse({ type: [Category], description: 'get categories' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiQuery({ name: 'queries', required: false })
    @Get()
    async find(@Query() queries: object): Promise<Category[]> {

        let condition = {}
        if(queries['name']) condition['name'] = queries['name']
        if(queries['parent']) condition['parent'] = queries['parent']
        if(queries['level']) condition['level'] = queries['level']

        return this.categoryService.find(condition);
    }

    @ApiOkResponse({ type: Category, description: 'delete a category by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Delete(':id')
    async delete(@Param('id') id: IdDTO): Promise<Category> {
        return this.categoryService.delete(id);
    }

}