import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StartModule { }
