import { Httpable } from "./httpable";

export class User extends Httpable{
    username:string;
    password:string;

    constructor(username:string, password:string) {
        super();
        
        this.username = username;
        this.password = password;
    } 
}