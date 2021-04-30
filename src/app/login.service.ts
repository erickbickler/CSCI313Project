import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { User } from './user';
import { LoginStatus } from './LoginStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService,
  ) { }

  login(username:string, password:string) {
    LoginStatus.loggedIn = true;
  }

  register(username:string, password:string) {
    let user:User = new User(username, password);

    this.httpService.httpPut('users', user).subscribe();
  }
}
