import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http-service.service';
import { LoginService } from '../login.service';
import { LoginStatus } from '../LoginStatus';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  loading = false;
  submitted = false;
  loggedIn = LoginStatus.loggedIn;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private httpService: HttpService,
    private titleService: Title,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Register");
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }

    this.loading = true;
    let user:User = new User(this.f.username.value, this.f.password.value);
    this.httpService.httpGet('users', 
      '?orderBy="username"&equalTo="' 
      + this.f.username.value
      + '"&limitToFirst=1'
    ).subscribe(data => {
      let matchedUser: User = data[0] as User;
      if(matchedUser) {
        alert("User already exists");
        this.loading = false;
      } else {
        this.httpService.httpPut('users', user).subscribe(data => {
          this.loading = false;
          LoginStatus.loggedIn = true;
          this.router.navigate(['home']);
        });
      }
    });
  }

}
