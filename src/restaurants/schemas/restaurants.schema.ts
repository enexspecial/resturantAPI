import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'


export enum Categories{
    FAST_FOOD = 'Fast Food',
    CAFE = 'Cafe',
    FINE_DINNING = 'Fine Dinning'
}

@Schema()
export class Restaurant {
    @Prop()
    name: string;

    @Prop()
    description: string;
    
    @Prop()
    address: string;

    @Prop()
    phoneNo: string;

    @Prop()
    email: string;

    @Prop()
    category: Categories

    @Prop()
    image?: object[]

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)