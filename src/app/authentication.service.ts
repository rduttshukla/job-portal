import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  res: object;
  baseUrl: string = 'http://localhost:4000'

  constructor(private httpClient: HttpClient) { }

  login(email:string, password: string) {
    return this.httpClient.post<{access_token: string}>(this.baseUrl + '/api/auth', {email, password}).pipe(tap( res => {
      this.res = res
      localStorage.setItem('access_token', JSON.stringify(this.res));
    }))
  }

  register(name: string, email:string, password: string) { 
    return this.httpClient.post<{access_token: string}>(this.baseUrl + '/api/users', {name: name, email: email, password: password}).pipe(tap(res => {
      this.login(email, password)
    }))
  }
}
