import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { LoginService } from '../login.service';
import { LoginStatus } from '../LoginStatus';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  loading = false;
  submitted = false;
  returnUrl:string = '';
  loggedIn = LoginStatus.loggedIn;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.form.invalid) {
      alert("Invalid input");
      return;
    }

    this.loading = true;
    let user: User = new User(this.f.username.value, this.f.password.value);
    this.httpService.httpGet('users', 
      '?orderBy="username"&equalTo="' 
      + user.username
      + '"&limitToFirst=1'
      ).subscribe(data => {
        let matchedUser: User = data[0] as User; 
        if(matchedUser) {
          if(matchedUser.username == user.username && matchedUser.password == user.password) {
            LoginStatus.loggedIn = true;
            alert("Logged in!");
            this.loading = false;
            this.router.navigate([this.returnUrl]);
          } 
        } else {
          alert("Invalid username or password");
        }
        this.loading = false;
      });
  }
}
