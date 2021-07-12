import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa';

@Injectable({
  providedIn: 'root',
})
export class ReceitaFederalService {
  constructor(private http: HttpClient) {}
  searchCNPJ(cnpj: string): Observable<Empresa> {
    const url = `https://localhost:5001/api/receita-federal/cnpj/${cnpj}`;

    return this.http.get<Empresa>(url);
  }
}
