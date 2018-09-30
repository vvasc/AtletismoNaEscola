import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PontuacaoService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllPontuacao() {
    return this.http.get(`${this.endpoint}/Pontuacao`, { headers: this.getHeaders() });
  }

  getPontuacao(id: number) {
    return this.http.get(`${this.endpoint}/Pontuacao/${id}`, { headers: this.getHeaders() });
  }

  createPontuacao(pontuacao: any) {
    return this.http.post(`${this.endpoint}/Pontuacao/`, {...pontuacao}, { headers: this.getHeaders() }).subscribe();
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

}
