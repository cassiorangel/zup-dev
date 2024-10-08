import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresComponent } from './lugares.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from 'src/app/server/endereco.service';
import { of, throwError } from 'rxjs';

describe('LugaresComponent', () => {
  let component: LugaresComponent;
  let fixture: ComponentFixture<LugaresComponent>;

  let enderecoService: EnderecoService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresComponent ],
      imports: [HttpClientTestingModule,  RouterModule.forRoot([]), ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresComponent);
    component = fixture.componentInstance;
    enderecoService = TestBed.inject(EnderecoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it(`O metodo list devera ser chamado`, () => {
    const data: any = [{
      "cep": "91260-316",
      "logradouro": "Rua São José",
      "complemento": "(Lot P Alves)",
      "unidade": "",
      "bairro": "Mário Quintana",
      "localidade": "Porto Alegre",
      "uf": "RS",
      "estado": "Rio Grande do Sul",
      "regiao": "Sul",
      "ibge": "4314902",
      "gia": "",
      "ddd": "51",
      "siafi": "8801"
    }]

    const onEndereco = spyOn(enderecoService, 'listLogradouro').and.returnValue(
      of(data)
    )

    component.onSubmit();
    expect(onEndereco).toHaveBeenCalled();
  });   
  
  it(`O metodo list erro`, () => {

    let onEndereco = spyOn(enderecoService, 'listLogradouro').and.returnValue(
      throwError('error')
    )

    component.onSubmit();
    expect(onEndereco).toHaveBeenCalled();
  });

  it(`O metodo onChange`, () => {

    let obj = [
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

    component.cidades = obj;
    component.onChange();
    
  });
  

  it(`O metodo onChange if`, () => {
    component.formulario.patchValue({
      name: 'RS'
    })
    component.onChange();
    
  });

});
