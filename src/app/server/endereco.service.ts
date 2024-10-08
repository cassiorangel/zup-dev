import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Endereco } from 'src/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient
  ) { }

  listLogradouro(estado: string, cidade: string, rua: string) {
    return this.http.get(`${environment.API}${estado}/${cidade}/${rua}/json/`)
      .pipe(
        map((data: any) => data.map((client: any) => {
          let log = {
            cep: client.cep,
            endereco: client.logradouro,
            estado: client.uf,
            cidade: client.localidade
          }
          return log;
        }))
      )
  }
}
