import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockViewComponent } from './block-view/block-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlockViewComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    BlockViewComponent,
  ],
})
export class SharedModule { }
