import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CNPJ } from '../models/CNPJ';

@Injectable({
  providedIn: 'root',
})
export class ReceitaFederalService {
  constructor(private http: HttpClient) {}
  searchCNPJ(cnpj: string): Observable<CNPJ> {
    const url = `https://localhost:5001/api/receita-federal/cnpj/${cnpj}`;

    return this.http.get<CNPJ>(url);
  }
}
