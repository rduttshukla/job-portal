import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: any;
  email: any;

  constructor() { }

  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem('access_token')).name;
    this.email = JSON.parse(localStorage.getItem('access_token')).email;
  }

}
