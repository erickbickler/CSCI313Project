import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { LoginStatus } from '../LoginStatus';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {

  loggedIn:boolean = LoginStatus.loggedIn;

  constructor() { }

  ngOnInit(): void {
    this.loggedIn = LoginStatus.loggedIn;
  }

  ngDoCheck(): void {
    this.loggedIn = LoginStatus.loggedIn;
  }

  
}
