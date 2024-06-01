import { Categories } from "../schemas/restaurants.schema"

export class updateRestaurantDTO {
    readonly name: string
    readonly email: string
    readonly phoneNo: string
    readonly description: string
    readonly address: string
    readonly category: Categories
}