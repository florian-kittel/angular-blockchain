import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { BlockchainViewerComponent } from './blockchain-viewer.component';

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
  ]
})
export class BlockchainViewerModule { }
