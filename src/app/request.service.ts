import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChequebookResponse } from './models/chequebookresponse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {


  constructor(private http: HttpClient) { }

  insertRequest(accNo: number, pages: number = 20) {
    const body = {
      account: accNo,
      no_of_pages: pages,
    };
    console.log(body);
    return this.http.post<ChequebookResponse>(
      environment.baseUrl+ '/cheque/request',
      body
    );
  }
}