import { Injectable, NotFoundException } from '@nestjs/common';
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

    // get restaurant by id
    async findById(id: string): Promise<Restaurant> {
        const restaurant = await this.restaurantModel.findById(id);
        if(!restaurant) throw new NotFoundException('Restaurant not found');
        return restaurant;
    }

    // update restaurant
    async updateRestaurantById(id: string, restaurant: Restaurant): Promise<Restaurant> {
       return await this.restaurantModel.findByIdAndUpdate(id, restaurant, {new: true, runValidators: true});
 
    }

    // delete restaurant
    async deleteRestaurantById(id: string): Promise<Restaurant> {
        return await this.restaurantModel.findByIdAndDelete(id);
    }
}
