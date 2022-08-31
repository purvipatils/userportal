import { Injectable } from '@angular/core';
import { TransferHistory } from './models/transferhistory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TransferhistoryService {
  private url: String;

  constructor(private http: HttpClient) { }
  public getTransferHistory(accNo): Observable<TransferHistory[]> {
    return this.http.get<TransferHistory[]>(
      environment.baseUrl+ '/account/getTransfers/' + accNo
    );
  }
  // public getSavingAccount(username):Observable<SavingAccount>{
  //   return this.http.get<SavingAccount>(this.url+"/account/getsaving/"+username);
  // }
}