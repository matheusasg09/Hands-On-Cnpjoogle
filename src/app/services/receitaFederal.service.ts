import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enterprise } from '../models/Enterprise';

@Injectable({
  providedIn: 'root',
})
export class ReceitaFederalService {
  constructor(private http: HttpClient) {}

  searchCNPJ(cnpj: string): Observable<Enterprise> {
    const url = `https://localhost:5001/api/ReceitaFederal/cnpj/${cnpj}`;

    return this.http.get<Enterprise>(url);
  }
}
