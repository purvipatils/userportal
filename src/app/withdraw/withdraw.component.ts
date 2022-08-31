import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { WithdrawService } from '../withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private withdrawService: WithdrawService
  ) {}
  withdrawForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit(): void {
    var accNo = +localStorage.getItem('savingAccNo');
    console.log(accNo);
    this.withdrawForm = this.formBuilder.group({
      account: accNo,
      amount: ['', [Validators.required]],
    });
  }

  get saccountno(): any {
    return localStorage.getItem('savingAccNo');
  }
  get fval() {
    return this.withdrawForm.controls;
  }

  withdraw() {
    this.submitted = true;
    if (this.withdrawForm.invalid) {
      return;
    }
    this.loading = true;
    const result: any = Object.assign({}, this.withdrawForm.value);

    // Do useful stuff with the gathered data
    try {
      this.withdrawService
        .insertEntry(result.account, +result.amount)
        .subscribe((data: any) => {
          this.loading = false;
          if (data.withdrawStatus == true) {
            Swal.fire({
              icon: 'success',
              title: 'Transaction successful',
              text: data.responseMessage,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: data.responseMessage,
            });
          }
        });
    } catch {
      this.loading = false;
    }
  }
}