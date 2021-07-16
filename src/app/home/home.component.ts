import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cnpj: string = '';

  constructor(private router: Router) {}

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

    this.router.navigate([this.cnpj]);
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
