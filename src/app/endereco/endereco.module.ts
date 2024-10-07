import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { LugaresComponent } from './lugares/lugares.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LugaresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EnderecoRoutingModule
  ]
})
export class EnderecoModule { }
