import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  fetchAll(): Observable<Pessoa[]> {
    return this.httpClient
              .get<Pessoa[]>('http://dummy.restapiexample.com/api/v1/employees')
              .pipe(map(data => data));
  }
}
