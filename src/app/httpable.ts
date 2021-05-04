import { v4 as uuidv4 } from 'uuid';

export class Httpable {
    id: string = "";
    constructor(){
        this.id = uuidv4();
    }
}