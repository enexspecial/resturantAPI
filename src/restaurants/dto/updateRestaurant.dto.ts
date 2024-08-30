import { IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString } from "class-validator"
import { Categories } from "../schemas/restaurants.schema"

export class updateRestaurantDTO {
    @IsString()
    @IsOptional()
    readonly name: string

    @IsEmail({}, {message: 'Invalid email address'})
    @IsOptional()
    readonly email: string

    @IsPhoneNumber('NG')
    @IsOptional()
    readonly phoneNo: string

    @IsString()
    @IsOptional()
    readonly description: string

    @IsString()
    @IsOptional()
    readonly address: string

    @IsEnum(Categories, {message: 'Invalid category'})
    @IsOptional()
    readonly category: Categories
}