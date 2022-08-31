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
    savingAccount: string,
    ifscNo: string,
    primaryAccount: string,
    amount: number
  ) {
    const body = {
      username: username,
      savingAccount: savingAccount,
      ifsc: ifscNo,
      primaryAccount: primaryAccount,
      amount: amount,
    };
    console.log(body);
    return this.http.post(environment.baseUrl + '/account/transfer', body);
  }
}