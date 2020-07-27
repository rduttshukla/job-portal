import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {
  name: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/');
    }
    this.name = JSON.parse(localStorage.getItem('access_token')).name;
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/');
  }

}
