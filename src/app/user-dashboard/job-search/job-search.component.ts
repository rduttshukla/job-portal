import { Component, OnInit } from '@angular/core';
import { JobsProviderService } from 'src/app/jobs-provider.service';
@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  jobsList: object;
  selectedJob: object;
  searchResult: object;
  sq: string;
  location: string;
  email: string;
  response: any;
  applicationId: object;
  applicationMessage: string;

  constructor(private jobsProviderService: JobsProviderService) { }

  ngOnInit() {
    this.jobsProviderService.getJobs().subscribe( jobsList => {
      this.jobsList = jobsList;
      console.log(this.jobsList);
      this.searchResult = this.jobsList;
    })
    this.email = JSON.parse(localStorage.getItem('access_token')).email;
  }

  selectJob(job) {
    this.selectedJob = job;
  }

  selectLocation(location) {
    this.location = location;
  }

  search() {
    this.jobsProviderService.searchJobs(this.sq, this.location).subscribe( searchResult => {
      this.searchResult = searchResult
      console.log(this.searchResult)
    })
  }

  apply(_id) {
    this.jobsProviderService.applyJob(_id, this.applicationMessage, this.email).subscribe( response => {
      this.response = response;
      this.applicationId = this.response.personsWhoApplied[this.response.personsWhoApplied.length - 1].applicationId;
      console.log(this.applicationId);
    });
  }
}
