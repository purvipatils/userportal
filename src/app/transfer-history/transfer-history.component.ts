import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferHistory } from '../models/transferhistory'
import { TransferhistoryService } from '../transfer-history.service';

import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit {

  private accNo: number = +localStorage.getItem("savingAccNo");
  public transferList: Array<TransferHistory>;
  public columnDefs: ColDef[] = [
    { field: "date" }, { field: "id" }, { field: "amount" }, { field: "saccount",  headerName:"Savings A/C No" }, { field: "raccount" , headerName:"Primary A/C No"}
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };


  constructor(private transferService: TransferhistoryService) { }

  ngOnInit(): void {
    this.transferService.getTransferHistory(this.accNo).subscribe(res => {
      this.transferList = res;
    });
  }

}