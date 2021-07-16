import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enterprise } from 'src/app/models/Enterprise';
import { ReceitaFederalService } from 'src/app/services/receitaFederal.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  enterprise!: Enterprise;

  constructor(
    private activatedRoute: ActivatedRoute,
    private receitaFederalService: ReceitaFederalService
  ) {}

  ngOnInit(): void {
    // 39252694000190
    this.activatedRoute.params.subscribe(({ cnpj }) => {
      this.receitaFederalService.searchCNPJ(cnpj).subscribe((enterprise) => {
        this.enterprise = enterprise;
      });
    });
  }
}
