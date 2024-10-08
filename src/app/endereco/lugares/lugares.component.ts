import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnderecoService } from 'src/app/server/endereco.service';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent {

  private destroy$ = new Subject<void>();
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
    private formEndereco: FormBuilder,
    private enderecoService: EnderecoService
  ) {
    this.formulario = this.formEndereco.group({
      name: [''],
      nome: [''],
      logradouro: ['']
    })
  }

  onSubmit() {
    this.enderecoService.listLogradouro()
      .pipe(
        takeUntil(this.destroy$),
    )
      .subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error: (error) => {
          console.log('algo errado');
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
