import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    const body = {
      username: userName,
      password: password,
    };
    return this.http.post(environment.baseUrl + '/login', body);
  }
}