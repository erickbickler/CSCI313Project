import { Injectable } from '@angular/core';
import { Location } from './location';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  addLocation(newLoc: Location) {
    return this.http.post(
      "https://csci313project-default-rtdb.firebaseio.com/" + "location.json",
      newLoc
    );
  }

  getLocationData() {
    return this.http
    .get<Location[]>(
      "https://csci313project-default-rtdb.firebaseio.com/location.json"
    )
    .pipe(
      map(data => {
        let locationArray: Location[] = [];
        for (let key in data) locationArray.push(data[key]);
        locationArray.sort((a,b) => a.city < b.city ? -1 : 1).sort((a,b) => a.state < b.state ? -1 : 1); // Sort by city name, then by state
        return locationArray;
      })
    );
  }

  deleteLocation(loc: Location) {
    return this.http
    .delete("https://csci313project-default-rtdb.firebaseio.com/location/" + loc.id + ".json");
  }
}
