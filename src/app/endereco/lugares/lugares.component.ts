import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent {
  formulario: FormGroup;

  cidades = [
    {
      id: 1,
      name: 'Porto Alegre'
    },
    {
      id: 2,
      name: 'Sao Paulo'
    },
    {
      id: 3,
      name: 'Rio de Janeiro'
    }
  ];

  constructor(
    private formEndereco: FormBuilder
  ) {
    this.formulario = this.formEndereco.group({
      nome: [null]
    })
  }

 

}
