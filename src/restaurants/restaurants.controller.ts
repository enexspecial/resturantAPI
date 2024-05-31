import { Controller, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurants.schema';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get()
    async getAllRestaurants(): Promise<Restaurant[]> {
        const restaurants = await this.restaurantsService.findAll();
        return restaurants
    }
}
