import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  token: any;
  name: any;
  is_active: any;

  ngOnInit() {
    this.token = window.localStorage.getItem('access_token');
    this.name = window.localStorage.getItem('userFirstName');
    this.is_active = window.localStorage.getItem('is_staff');
  }

  logout() {
    window.localStorage.clear();
  }
}
