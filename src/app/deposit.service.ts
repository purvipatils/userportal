import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepositService {

  constructor(private http: HttpClient) {}

  insertEntry(account: string, amount: number) {
    const body = {
      account: account,
      amount: amount,
    };   
    return this.http.post(environment.baseUrl + '/account/deposit', body);
  }
}