import { Categories } from '../schemas/restaurants.schema';
import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
export class createRestaurantDto {
    @IsNotEmpty()
    readonly name: string

    @IsNotEmpty()
    @IsEmail({}, {message: 'Invalid Email'})
    readonly email: string

    @IsNotEmpty()
    @IsPhoneNumber('NG', {message: 'Invalid Phone Number'})
    readonly phoneNo: string

    @IsNotEmpty()
    @IsString()
    readonly description: string

    @IsNotEmpty()
    @IsString()
    readonly address: string

    @IsNotEmpty()
    @IsEnum(Categories, {message: 'Invalid Category'})
    readonly category: Categories
}