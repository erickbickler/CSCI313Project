import { Httpable } from "../httpable";

export class MenuItem extends Httpable  
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

    public setDescription(description:string){
        this.description = description
    }

    public setName(name:string){
        this.name = name
    }

    setImage(image:string){
        this.image = image
    }
}