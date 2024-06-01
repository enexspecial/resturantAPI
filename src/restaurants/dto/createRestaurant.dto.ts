import { Categories } from '../schemas/restaurants.schema';
export class createRestaurantDto {
    readonly name: string
    readonly email: string
    readonly phoneNo: string
    readonly description: string
    readonly address: string
    readonly category: Categories
}