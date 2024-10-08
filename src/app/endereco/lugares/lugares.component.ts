import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/server/endereco.service';
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})


export class LugaresComponent {

  private destroy$ = new Subject<void>();
  state: boolean = true;
  listResult: any[] = [];

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
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario = this.formEndereco.group({
      name: ['', Validators.required],
      nome: [{ value: '', disabled: true }, Validators.required],
      logradouro: ['', Validators.required]
    })
  }

  onSubmit() {

    this.enderecoService.listLogradouro(this.formulario.value.name, this.formulario.value.nome, this.formulario.value.logradouro)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (response: any) => {
          console.log(response)
          this.listResult = response;
        },
        error: (error) => {
          console.log('algo errado');
        },
      });

  }

  onChange() {
    if (this.formulario.controls['name'].value) {
      return this.formulario.controls['nome'].enable();
    }
    this.formulario.patchValue({
      nome: ''
    })
    return this.formulario.controls['nome'].disable();
  }

  onEdit(id: string) {
    this.router.navigate(['detalhamento', id?.replace(/\.|\-/g, '')], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
