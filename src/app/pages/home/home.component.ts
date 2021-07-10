import { Component, OnInit } from '@angular/core';
import { ReceitaFederalService } from 'src/app/services/receitaFederal.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  cnpj: string = '';

  constructor(private receitaFederal: ReceitaFederalService) {}

  ngOnInit(): void {}
  searchCNPJ(): void {
    console.log('ixi');
    this.receitaFederal
      .searchCNPJ(this.cnpj)
      .subscribe(
        (response) => {
          console.log(response);
        },
        () => {}
      )
      .add(() => {});
  }
}
