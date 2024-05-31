import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/restaurants.schema';
import * as moongoose from 'mongoose';

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectModel(Restaurant.name)
        private readonly restaurantModel: moongoose.Model<Restaurant>,
    ) {}

    // Get all restaurants
    async findAll(): Promise<Restaurant[]> {
        const restaurant = await this.restaurantModel.find()
        return restaurant;
    }

    // create restaurant
    async create(restaurant: Restaurant): Promise<Restaurant> {
        const newRestaurant = await this.restaurantModel.create(restaurant);
        return newRestaurant;
    }
}
