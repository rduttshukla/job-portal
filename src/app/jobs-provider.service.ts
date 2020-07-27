import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsProviderService {
  baseUrl: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getJobs() {
    return this.httpClient.get(this.baseUrl + '/jobs');
  }

  searchJobs(sq, location) {
    return this.httpClient.get(this.baseUrl + '/search/' + sq + '/' + location);
  }

  postJobs(jobDetails) {
    return this.httpClient.post(this.baseUrl + '/jobs', jobDetails);
  }

  applyJob(_id, applicationMessage, email) {
    return this.httpClient.put(this.baseUrl + '/apply/', {_id: _id, applicationMessage: applicationMessage, email: email});
  }

  respond(_id, email, response) {
    return this.httpClient.put('http://localhost:4000/api/response', { email: email, response: response });
  }

  getResponses(email) {
    return this.httpClient.post('http://localhost:4000/api/response', { email: email });
  }
}
