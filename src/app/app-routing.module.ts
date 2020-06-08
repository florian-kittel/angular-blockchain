import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () => import('./pages/blockchain-viewer/blockchain-viewer.module').then(m => m.BlockchainViewerModule),
  },
  { path: '**', redirectTo: '/overview', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
