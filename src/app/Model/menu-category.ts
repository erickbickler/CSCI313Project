import { Httpable } from "../httpable";

export class MenuCategory extends Httpable  
{
    name:string = '';
    description:string = '';
    image:string = '';
    constructor(name:string, description:string, image:string){
        super();
        this.name = name;
        this.description = description;
        this.image = image;
    }
    setDescription(description:string){
        this.description = description
    }

    setName(name:string){
        this.name = name
    }

    setImage(image:string){
        this.image = image
    }
}