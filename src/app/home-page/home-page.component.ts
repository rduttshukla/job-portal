import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { HostListener, Inject } from "@angular/core";
import { NgClass } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { document } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  username: string;
  cpassword: string;
  message: string;
  alert: string;
  registering = false;
  response: object;

  constructor(private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService) {
   }

  ngOnInit() {
  }

    @HostListener("window:scroll", [])
    onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 150) {
      return true;
    } else return false;
  }

  login() {
    if(this.email.length == 0) {
      alert('email required')
    } 
    else if(this.password.length == 0) { 
      alert('password required') 
    }
    else {
      this.authenticationService.login(this.email, this.password).subscribe( accessToken => {
        console.log(accessToken)
        this.router.navigateByUrl('/user-dashboard')
      })
    }
  }

  registerToggle() {
   if(this.registering == false) this.registering = true;
   else this.registering = false;
  }

  register() {
    if(this.password === this.cpassword) {
      console.log('')
      this.authenticationService.register(this.name, this.email, this.password).subscribe(response => {
        this.response = response;
        console.log(this.response)
        this.message = 'account created'
        this.toastr.success('Account created!');
        // this.router.navigateByUrl('/user-dashboard')
      })
    } else {
      this.alert = 'passwords do not match'
    }
  }
}
