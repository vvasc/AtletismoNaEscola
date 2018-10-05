import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConteudoService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  createConteudo(conteudo: any) {
    return this.http.post(`${this.endpoint}/Conteudo/`, {...conteudo}, { headers: this.getHeaders() });
  }

  getAllConteudo() {
    return this.http.get(`${this.endpoint}/Conteudo/`, { headers: this.getHeaders() });
  }

  patchConteudo(id, conteudo) {
    return this.http.patch(`${this.endpoint}/Conteudo/${id}`, {...conteudo}, { headers: this.getHeaders() });
  }

  getConteudo(id: number) {
    return this.http.get(`${this.endpoint}/Conteudo/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}