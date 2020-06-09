import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../component.interfaces';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  @Input() transactions: Transaction[] = [];
  @Input() public index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
