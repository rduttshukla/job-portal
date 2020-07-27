import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { JobSearchComponent } from './user-dashboard/job-search/job-search.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { PostJobsComponent } from './recruiter-dashboard/post-jobs/post-jobs.component';
import { SeeApplicantsComponent } from './recruiter-dashboard/see-applicants/see-applicants.component';
import { ResponsesComponent } from './user-dashboard/responses/responses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RecruiterRegisterComponent } from './recruiter-login/recruiter-register/recruiter-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RecruiterLoginComponent,
    UserDashboardComponent,
    RecruiterDashboardComponent,
    HomePageComponent,
    JobSearchComponent,
    ProfileComponent,
    PostJobsComponent,
    SeeApplicantsComponent,
    ResponsesComponent,
    EditProfileComponent,
    RecruiterRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
