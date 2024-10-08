import { Component, OnDestroy } from '@angular/core';
import { EnderecoService } from 'src/app/server/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  listDetalhes: any[] = [];
  dataCep: string = "";

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.detalhes();
  }

  detalhes () {
    const cep = this.route.snapshot.params['id'];
   // this.dataCep = [cep.slice(0, 5), "-", cep.slice(5)].join('');

    this.enderecoService.listDetalhes(cep)
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe({
      next: (response: any) => {
        this.listDetalhes = response;
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
