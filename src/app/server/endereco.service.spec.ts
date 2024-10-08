import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnderecoService } from './endereco.service';

describe('EnderecoService', () => {
  let service: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
