import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConteudoService {
  private endpoint: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  createConteudo(conteudo: any) {
    return this.http.post(`${this.endpoint}/Conteudo/`, {...conteudo}, this.getOptions() );
  }

  getAllConteudo() {
    return this.http.get(`${this.endpoint}/Conteudo/`, { headers: this.getHeaders() });
  }

  patchConteudo(id, conteudo) {
    return this.http.patch(`${this.endpoint}/Conteudo/${id}`, {...conteudo}, this.getOptions());
  }

  getConteudo(id: number) {
    return this.http.get(`${this.endpoint}/Conteudo/${id}`, { headers: this.getHeaders() });
  }

  deleteConteudo(id: number) {
    return this.http.delete(`${this.endpoint}/Conteudo/${id}`, this.getOptions() );
  }

  getOptions() {
    return { headers: this.getHeaders(), withCredentials: true};
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
