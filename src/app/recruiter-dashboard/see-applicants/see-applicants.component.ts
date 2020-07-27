import { Component, OnInit } from '@angular/core';
import { JobsProviderService } from 'src/app/jobs-provider.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-see-applicants',
  templateUrl: './see-applicants.component.html',
  styleUrls: ['./see-applicants.component.css']
})

export class SeeApplicantsComponent implements OnInit {
  jobs: any;
  applicants: Array<object> = [];
  response: string;
  ack: Object;
  responding = false;

  constructor(private jobsProviderService: JobsProviderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.jobsProviderService.getJobs().subscribe( jobs => {
      this.jobs = jobs;
      for(let i = 0; i < this.jobs.length; i++) {
        this.applicants[i] = this.jobs[i].personsWhoApplied;
      }
      console.log(this.applicants);
    })
  }

  respond() {
    this.jobsProviderService.respond(JSON.parse(localStorage.getItem('access_token'))._id, JSON.parse(localStorage.getItem('access_token')).email, this.response).subscribe( ack => {
      this.ack = ack
      console.log(this.ack)
      this.toastr.success("Response has been successfully sent!");
    })
  }

  respondToggle() {
    this.responding = true;
    this.ack = null;
  }
}
