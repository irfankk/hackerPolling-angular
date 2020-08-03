import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  
  submit(username, password) {
    const params = {
      username: username,
      password: password
    };
    this.loginService.login(params).subscribe(
      (result: Response) => {
        window.localStorage.setItem('access_token', result['access_token'])
        window.localStorage.setItem('userFirstName', result['userFirstName'])
        window.localStorage.setItem('is_staff', result['is_staff'])
        window.localStorage.setItem('userEmail', result['userEmail'])
      }, (err: Response) => {

      }
    );
  }
}
