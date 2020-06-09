import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockViewComponent } from './block-view/block-view.component';
import { RouterModule } from '@angular/router';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlockViewComponent,
    TransactionTableComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    BlockViewComponent,
    TransactionTableComponent,
  ],
})
export class SharedModule { }
