import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConteudoService {
  private endpoint: string = 'http://localhost:1337/Conteudo';

  constructor(private http: HttpClient) { }

  getAllConteudo() {
    return this.http.get(`${this.endpoint}`, { headers: this.getHeaders() });
  }

  getConteudo(id: number) {
    return this.http.get(`${this.endpoint}/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

}
