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
    let user: User = new User(username, password);
    this.httpService.httpGet('users', 
      '?orderBy="username"&equalTo="' 
      + username 
      + '"&limitToFirst=1'
      ).subscribe(data => {
        let matchedUser: User = data[0] as User;
        if(matchedUser.username == user.username && matchedUser.password == user.password) {
          LoginStatus.loggedIn = true;
          alert("Logged in!")
        } else {
          alert("Invalid Username or password");
        }
      });
  }
}
