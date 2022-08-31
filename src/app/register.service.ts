import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  insertUser(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    dob: Date,
    phone: number,
    address: string,
    identityType: string,
    identity: string,
    email: string
  ) {
    const body = {
      fname: firstName,
      lname: lastName,
      username: userName,
      password: password,
      dob: dob,
      phone: phone,
      address: address,
      identityType: identityType,
      identity: identity,
      email: email,
    };


    return this.http.post(environment.baseUrl + '/register', body);
  }
}