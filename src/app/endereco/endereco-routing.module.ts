import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: LugaresComponent
  },
  {
    path: 'detalhamento/:id',
    component: DetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
