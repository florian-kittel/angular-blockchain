import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BlockchainViewerComponent } from './blockchain-viewer.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BlockchainViewerComponent
  }
];

@NgModule({
  declarations: [
    BlockchainViewerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BlockchainViewerModule { }
