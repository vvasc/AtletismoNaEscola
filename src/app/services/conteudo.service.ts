import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConteudoService {
  private endpoint: string = 'http://localhost:1337/Conteudo';

  constructor(private http: HttpClient) { }

  getConteudo() {
    return this.http.get(`${this.endpoint}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

}