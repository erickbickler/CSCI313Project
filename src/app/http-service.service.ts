import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Httpable } from './httpable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private dbConn: string = "https://csci313project-default-rtdb.firebaseio.com/";
  
  
  // Executes an http get request from the database at the file name paramater.
  httpGet(file: string) {
    return this.http.get<Httpable[]>(
      this.dbConn + file
    ).pipe(
      map( data => {
        let cArray: Httpable[] = [];
        for(let key in data) cArray.push(data[key]);
        return cArray;
      })
    );
  }
      
  httpPost(file: string, obj: Httpable) {
    return this.http.post(this.dbConn + file, obj);
  }
  
  httpDelete(file: string, objId: string) {
    return this.http.delete(this.dbConn + objId + ".json");
  }
  
  httpPut(file:string, objId: string, obj: Httpable) {
    return this.http.put(this.dbConn + file + objId + ".json", this.dataWrapper(obj));
  }
  
  private dataWrapper(obj: Httpable) {
    return {
      [obj.id]: obj
    }
  }

}
    