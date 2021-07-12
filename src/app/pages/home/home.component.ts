import { Component, OnInit } from '@angular/core';
import { ReceitaFederalService } from 'src/app/services/receitaFederal.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cnpj: string = '';

  constructor(private receitaFederalService: ReceitaFederalService) {}

  ngOnInit(): void {}

  onKeyPress(event: any): void {
    if (event.key === 'Enter') {
      this.searchCNPJ();
    }
  }

  searchCNPJ(): void {
    if (!this.validateForm()) {
      return;
    }

    this.receitaFederalService
      .searchCNPJ(this.getCnpj())
      .subscribe((response) => console.log(response));
  }

  private onlyNumbers(str: string): string {
    return str.replace(/[^0-9]/g, '');
  }

  private getCnpj(): string {
    return this.onlyNumbers(this.cnpj);
  }

  private validateForm(): boolean {
    const cnpj = this.getCnpj();
    return String(cnpj).length === 14;
  }
}
