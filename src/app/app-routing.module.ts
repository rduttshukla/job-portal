import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobSearchComponent } from './user-dashboard/job-search/job-search.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { PostJobsComponent } from './recruiter-dashboard/post-jobs/post-jobs.component'
import { SeeApplicantsComponent } from './recruiter-dashboard/see-applicants/see-applicants.component';
import { ResponsesComponent } from './user-dashboard/responses/responses.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RecruiterRegisterComponent } from './recruiter-login/recruiter-register/recruiter-register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'user-login', component: UserLoginComponent },
  { 
    path: 'recruiter-login', 
    component: RecruiterLoginComponent,
    children: [
      { path: 'register', component: RecruiterRegisterComponent },
    ]
  },
  { 
    path: 'user-dashboard', 
    component: UserDashboardComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'job-search', component: JobSearchComponent },
      { path: 'responses', component: ResponsesComponent },
    ],
  },
  { 
    path: 'recruiter-dashboard', 
    component: RecruiterDashboardComponent,
    children: [
      { path: '', component: PostJobsComponent },
      { path: 'post-jobs', component: PostJobsComponent },
      { path: 'see-applicants', component: SeeApplicantsComponent},
    ],
  },
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
