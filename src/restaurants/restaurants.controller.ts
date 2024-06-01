import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurants.schema';
import { createRestaurantDto } from './dto/createRestaurant.dto';
import { updateRestaurantDTO } from './dto/updateRestaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get()
    async getAllRestaurants(): Promise<Restaurant[]> {
        const restaurants = await this.restaurantsService.findAll();
        return restaurants
    }

    @Post()
    async createRestaurant(@Body()restaurant: createRestaurantDto): Promise<Restaurant> {
        const newRestaurant = await this.restaurantsService.create(restaurant);
        return newRestaurant
    }

    @Get(':id')
    async getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
        const restaurant = await this.restaurantsService.findById(id);
        return restaurant
    }

    @Put(':id')
    async updateRestaurantById(@Param('id') id: string, @Body() restaurant: updateRestaurantDTO): Promise<Restaurant> {
        await this.restaurantsService.findById(id);
        const updatedRestaurant = await this.restaurantsService.updateRestaurantById(id, restaurant);
        return updatedRestaurant
    }

    @Delete(':id')
    async deleteRestaurantById(@Param('id') id: string): Promise<{deleted: boolean}> {
        await this.restaurantsService.findById(id);
        const deletedRestaurant = await this.restaurantsService.deleteRestaurantById(id);
        if(deletedRestaurant) return {deleted: true};
    }
}
