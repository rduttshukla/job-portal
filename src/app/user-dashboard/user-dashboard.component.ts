import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobsProviderService } from '../jobs-provider.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  name: string;
  email: string;
  responses: object;
  constructor(private router: Router, private toastr: ToastrService, private jobsProviderService: JobsProviderService) { }

  ngOnInit() {
    if(!localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/');
    }
    this.name = JSON.parse(localStorage.getItem('access_token')).name;
    this.email = JSON.parse(localStorage.getItem('access_token')).email;
    this.jobsProviderService.getResponses(JSON.parse(localStorage.getItem('access_token')).email).subscribe( responses => {
      this.responses = responses;
      console.log(this.responses);
      for(let i = 0; i < Object.keys(this.responses).length; i++) {
        this.toastr.info(this.responses[i], "Response Received").onTap.pipe(take(1)).subscribe(() => this.toastrClickedHandler())
      }
    })
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/');
  }

  showSuccess() {
    this.toastr.success('You have a new response!', 'Toastr fun!');
  }

  toastrClickedHandler() {
    this.router.navigateByUrl('/user-dashboard/responses')
  }
}
