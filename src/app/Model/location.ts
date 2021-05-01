import { Httpable } from "../httpable";

export class Location extends Httpable
{
    city: string = '';
    state: string = '';
    address: string = '';
    phone_number: string = '';
    map_url: string = '';

    constructor(city:string, state:string, address:string, phone_number:string, map_url:string) {
        super();
        this.city = city;
        this.state = state;
        this.address = address;
        this.phone_number = phone_number;
        this.map_url = map_url;
    }
}