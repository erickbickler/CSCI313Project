import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Httpable } from './httpable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  admin:boolean = true;
  
  constructor(private http: HttpClient) { }

  private dbConn: string = "https://csci313project-default-rtdb.firebaseio.com/";
  
  
  // Executes an http get request from the database at the file name paramater.
  httpGet(file: string, query?:string) {
    if(query != undefined) {
      return this.http.get<Httpable[]>(
        this.dbConn + file  + ".json" + query
      ).pipe(
        map( data => {
          let cArray: Httpable[] = [];
          for(let key in data) cArray.push(data[key]);
          return cArray;
        })
      );
    } else {
      return this.http.get<Httpable[]>(
        this.dbConn + file  + ".json"
      ).pipe(
        map( data => {
          let cArray: Httpable[] = [];
          for(let key in data) cArray.push(data[key]);
          return cArray;
        })
      );
    }
    
  }
  
  // Executes an http post request to the database at the file name and pushes the object to that file.
  httpPost(file: string, obj: Httpable) {
    return this.http.post(this.dbConn + file + "/" + obj.id + ".json", obj);
  }
  
  // Executes an http delete request to the database at the file name and deletes the object with the same id
  httpDelete(file: string, obj: Httpable) {
    return this.http.delete(this.dbConn + file + '/' +  obj.id + ".json");
  }
  
  // Executes an http put request to the database at the file name and updates the object with the same id
  httpPut(file:string, obj: Httpable) {
    return this.http.put(this.dbConn + file + "/" + obj.id + ".json", obj);
  }
  
  // Used for setting the id of the object so the file is properly named
  private dataWrapper(obj: Httpable) {
    return {
      [obj.id]: obj
    }
  }

}