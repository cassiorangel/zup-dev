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

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.detalhes();
  }

  detalhes () {
    const cep = this.route.snapshot.params['id'];
    console.log(cep)
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
