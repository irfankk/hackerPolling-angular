import { Component, OnInit } from '@angular/core';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  email: any;
  firstName: any;
  lastName: any;
  password: any;

  constructor(
    private adminSerive: AdminService
  ) { }

  ngOnInit() {
  }
  submit() {
    const params = {
      email : this.email,
      password: this.password,
      first_name: this.firstName,
      last_name: this.lastName,
      username: this.email
    };
    this.adminSerive.addCandidate(params).subscribe(
      result =>{
        console.log(result);
      }
    )
  }
}
