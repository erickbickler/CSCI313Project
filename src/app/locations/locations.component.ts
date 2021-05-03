import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { Location } from '../Model/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];
  new_city: string = '';
  new_state: string = '';
  new_address: string = '';
  new_phone_number: string = '';
  new_map_url: string ='';
  location:Location = new Location('', '', '', '', '');

  isAdmin: boolean = true;
  locationToEdit: Location = new Location('', '', '', '', '');

  constructor(private dbService: HttpService) { }

  ngOnInit() {
    this.fetchData();
  }

  addLocation() {
    this.new_map_url = 'https://www.google.com/maps/search/?api=1&query=' + this.new_address.replace(' ', '+')
    + '+' + this.new_city.replace(' ', '+') + '+' + this.new_state.replace(' ', '+');

    let newLocation:Location = new Location(this.new_city, this.new_state, this.new_address, this.new_phone_number, this.new_map_url);
    this.dbService.httpPut('location', newLocation).subscribe(data => this.fetchData());

    // Clear the text boxes
    this.new_city = '';
    this.new_state = '';
    this.new_address = '';
    this.new_phone_number = '';
  }

  editLocation(loc: Location) {
    this.locationToEdit = loc;
    this.locationToEdit.id = loc.id;
  }

  saveLocation(loc: Location) {
    this.locationToEdit.map_url = 'https://www.google.com/maps/search/?api=1&query=' + this.locationToEdit.address.replace(' ', '+')
    + '+' + this.locationToEdit.city.replace(' ', '+') + '+' + this.locationToEdit.state.replace(' ', '+');
    this.dbService.httpPut('location', this.locationToEdit).subscribe(data => this.fetchData());

    this.locationToEdit = new Location('', '', '', '', '');
  }

  cancel() {
    this.locationToEdit = new Location('', '', '', '', '');
  }

  deleteLocation(loc: Location) {
    this.dbService.httpDelete('location', loc).subscribe(data => this.fetchData());
  }

  fetchData() {
    this.dbService.httpGet('location').subscribe(data => this.locationList = data as Location[]);
  }
}
