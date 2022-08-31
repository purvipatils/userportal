import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TransferService {
  
  constructor(private http: HttpClient) { }

  insertEntry(
    username: string,
    saccount: string,
    ifscNo: string,
    raccount: string,
    amount: number
  ) {
    const body = {
      username: username,
      saccount: saccount,
      ifsc: ifscNo,
      raccount: raccount,
      amount: amount,
    };
    console.log(body);
    return this.http.post(environment.baseUrl + '/account/transfer', body);
  }
}