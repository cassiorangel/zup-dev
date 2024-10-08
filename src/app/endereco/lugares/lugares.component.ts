import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent {
  formulario: FormGroup;
  estados = [
    {
      id: 1,
      name: 'RS'
    },
    {
      id: 2,
      name: 'SP'
    },
    {
      id: 3,
      name: 'RJ'
    }
  ];

  cidades = [
    {
      id: 1,
      nome: 'Porto Alegre'
    },
    {
      id: 2,
      nome: 'Sao Paulo'
    },
    {
      id: 3,
      nome: 'Rio de Janeiro'
    }
  ];

  constructor(
    private formEndereco: FormBuilder
  ) {
    this.formulario = this.formEndereco.group({
      name: [''],
      nome: [''],
      logradouro: ['']
    })
  }

  onSubmit() {
    console.log(this.formulario.value)
  }
}
