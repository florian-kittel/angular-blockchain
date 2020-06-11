import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { CreateTransactionComponent } from './create-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTransactionComponent
  }
];

@NgModule({
  declarations: [
    CreateTransactionComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CreateTransactionModule { }
