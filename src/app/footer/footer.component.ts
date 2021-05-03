import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus } from '../LoginStatus';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {
  isAdmin:boolean = true;
  loggedIn:boolean = LoginStatus.loggedIn;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = LoginStatus.loggedIn;
  }

  ngDoCheck(): void {
    this.loggedIn = LoginStatus.loggedIn;
  }

  logout() {
    LoginStatus.loggedIn = false;
    this.router.navigate(['login']);
  }
  
}
