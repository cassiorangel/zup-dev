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
  visao: boolean = true;
  listResult: any[] = [];
  retornoCidades: any[] = [];

  formulario: FormGroup;

  estados = [
    {
      id: 1,
      name: 'RS'
    },
    {
      id: 2,
      name: 'SP'
    }
  ];

  cidades = [
    {
      id: 1,
      chave: 'RS',
      nome: 'Porto Alegre'
    },
    {
      id: 2,
      chave: 'RS',
      nome: 'Caxias do Sul'
    },
    {
      id: 3,
      chave: 'SP',
      nome: 'Sao Paulo'
    },
    {
      id: 4,
      chave: 'SP',
      nome: 'Osasco'
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

    this.visao = false;

    this.enderecoService.listLogradouro(this.formulario.value.name, this.formulario.value.nome, this.formulario.value.logradouro)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (response: any) => {
          console.log(response)
          this.listResult = response;
          this.visao = true;
        },
        error: (error) => {
          this.visao = true;
          console.log('algo errado');
        },
      });

  }

  onChange() {

    this.retornoCidades = this.cidades.filter(res => res.chave === this.formulario.controls['name'].value);

    this.formulario.patchValue({
      nome: ''
    });

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
