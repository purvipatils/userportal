import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction';

import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  username = localStorage.getItem("username");
  accNo = JSON.parse(localStorage.getItem("savingAccNo"));
  public savingBalance: number;


  public transactionList: Array<Transaction>;
  public columnDefs: ColDef[] = [
    { field: "date" }, { field: "id" }, { field: "action" }, { field: "amount" }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

    this.transactionService.getTransactions(this.accNo).subscribe((res: Transaction[]) => {
      this.transactionList = res;
    });

    this.transactionService.getSavingAccount(this.username).subscribe(res => {
      this.savingBalance = res.balance;
    });

  }


}