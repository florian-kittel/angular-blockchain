import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule),
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/blockchain-viewer/blockchain-viewer.module').then(m => m.BlockchainViewerModule),
  },
  {
    path: 'transaction',
    loadChildren: () => import('./pages/create-transaction/create-transaction.module').then(m => m.CreateTransactionModule),
  },
  { path: '**', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
