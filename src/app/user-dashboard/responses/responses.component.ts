import { Component, OnInit } from '@angular/core';
import { JobsProviderService } from 'src/app/jobs-provider.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  responses: Object;
  responsesExist = false;

  constructor(private jobsProviderService: JobsProviderService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.jobsProviderService.getResponses(JSON.parse(localStorage.getItem('access_token')).email).subscribe( responses => {
      this.responses = responses;
      console.log(this.responses);
      if(Object.keys(this.responses).length == 0) {
        this.responsesExist = false
      } else this.responsesExist = true;
    })
  }

}
