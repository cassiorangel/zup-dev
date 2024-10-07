import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { LugaresComponent } from './lugares/lugares.component';


@NgModule({
  declarations: [
    LugaresComponent
  ],
  imports: [
    CommonModule,
    EnderecoRoutingModule
  ]
})
export class EnderecoModule { }
