import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = false;

  constructor(
    private httpService: HttpService,
  ) { }

  login(username:string, password:string) {
    this.loggedIn = true;
  }

  register(username:string, password:string) {
    let user:User = new User(username, password);

    this.httpService.httpPut('users', user).subscribe();
  }
}
