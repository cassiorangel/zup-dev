import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lugares',
    loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule)
  },
  {
    path: '',
    redirectTo: '/lugares',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
