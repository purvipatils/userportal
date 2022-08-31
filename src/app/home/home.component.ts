import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { TransferhistoryService } from '../transfer-history.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = localStorage.getItem("username");
  private accNo: number = +localStorage.getItem("savingAccNo");
  savingAcc: number;
  primaryAcc: number;
  savingBalanceLocal: number;
  primaryBalanceLocal: number;
  transaction: any = {
    count: 0,
    deposit: 0,
    withdrawl: 0,
    total: 0
  };
  transfer = 0;

  constructor(public authService: AuthService,
    public userService: UserService,
    private transactionService: TransactionService,
    private transferService: TransferhistoryService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.userService.getUser(this.username).subscribe(res => {
      this.savingAcc = res.savingsAccno;
      this.primaryAcc = res.primaryAccno;
      this.savingBalanceLocal = res.savingsBalance;
      this.primaryBalanceLocal = res.primaryBalance;
      localStorage.setItem("savingAccNo", this.savingAcc.toString());
    });

    this.transactionService.getTransactions(this.accNo).subscribe((res) => {
      if (res) {
        this.transaction.count = res.length;
        res.forEach(item => {
          if (item.action == 'deposit') {
            this.transaction.deposit += item.amount;
          } else {
            this.transaction.withdrawl += item.amount;
          }
        });
        this.transaction.total = this.transaction.withdrawl + this.transaction.deposit;
      }
    });

    this.transferService.getTransferHistory(this.accNo).subscribe(res => {
      if (res) {
        res.forEach(item => {
          this.transfer += item.amount;
        })
      }
    });
  }

  displayuserdetails() {
    this.userService.getUser(this.username).subscribe(() => this.ngOnInit());
  }

}