import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];
  nextID: number = 0;
  new_city: string = '';
  new_state: string = '';
  new_address: string = '';
  new_phone_number: string = '';
  new_map_url: string ='';

  isAdmin: boolean = true;


  constructor(private locService: LocationService) { }

  ngOnInit() {
    this.fetchData();
  }

  addNewLocation() {
    this.new_map_url = 'https://www.google.com/maps/search/?api=1&query=' + this.new_address.replace(' ', '+')
    + '+' + this.new_city.replace(' ', '+') + '+' + this.new_state.replace(' ', '+');

    const newLocation: Location = {
      id: ++this.nextID,
      city: this.new_city,
      state: this.new_state,
      address: this.new_address,
      phone_number: this.new_phone_number,
      map_url: this.new_map_url
    };
    this.locService.addLocation(newLocation).subscribe(data => this.fetchData());

    // Clear the text boxes
    this.new_city = '';
    this.new_state = '';
    this.new_address = '';
    this.new_phone_number = '';
  }

  deleteLocation(loc: Location) {
    this.locService.deleteLocation(loc).subscribe(data => this.fetchData());
  }

  fetchData() {
    this.locService
      .getLocationData()
      .subscribe(data => (this.locationList = data));
  }
}
