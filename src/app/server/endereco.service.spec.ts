import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnderecoService } from './endereco.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let httpController: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`serve`, () => {
    const expectedUrl = `https://viacep.com.br/ws/91260316/json/`;
    
    let mockUsers = {
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
    }

    service.listDetalhes('91260316').subscribe((data) => { // now have to subscribe getUsers method to get data
      console.log(data)
    });
    httpController.expectOne({
      method: 'GET',
      url: 'https://viacep.com.br/ws/91260316/json/',
    }).flush(mockUsers);     
  });
    
});
