import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobsProviderService } from 'src/app/jobs-provider.service';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {
  jobTitle: String;
  response: object;
  company: String;
  location: String;
  locationSelected = false;
  description: String;
  jobs: object;
  jobDetails = {
    jobTitle: { type: String },
    company: { type: String },
    location: { type: String },
    description: { type: String }
  }

  constructor( private httpClient: HttpClient, private jobsProviderService: JobsProviderService) { }

  ngOnInit() {
  }

  selectLocation(location) {
    this.location = location;
    this.jobDetails.location = location
  }

  postJob() {
    this.jobDetails.jobTitle = String(this.jobTitle);
    this.jobDetails.company = this.company;
    this.jobDetails.description = this.description;
    this.jobsProviderService.postJobs(this.jobDetails).subscribe( response => {
      this.response = response
      console.log(this.response)
    })
  }
}
