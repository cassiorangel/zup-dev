import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesComponent } from './detalhes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { EnderecoService } from 'src/app/server/endereco.service';
import { of, throwError } from 'rxjs';

describe('DetalhesComponent', () => {
  let component: DetalhesComponent;
  let fixture: ComponentFixture<DetalhesComponent>;

  let enderecoService: EnderecoService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetalhesComponent);
    component = fixture.componentInstance;
    enderecoService = TestBed.inject(EnderecoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`O metodo detalhe devera ser chamado`, () => {
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

    const onEndereco = spyOn(enderecoService, 'listDetalhes').and.returnValue(
      of(data)
    )

    component.detalhes();
    expect(onEndereco).toHaveBeenCalled();
  });

  it(`O metodo detalhe erro`, () => {

    let onEndereco = spyOn(enderecoService, 'listDetalhes').and.returnValue(
      throwError('error')
    )

    component.detalhes();
    expect(onEndereco).toHaveBeenCalled();
  });
});
