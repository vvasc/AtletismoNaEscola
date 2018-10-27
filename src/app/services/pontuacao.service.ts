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
    return this.http.post(`${this.endpoint}/Pontuacao/`, {...pontuacao}, this.getOptions() );
  }

  deletarPontuacao(id: number) {
    return this.http.delete(`${this.endpoint}/Pontuacao/${id}`, this.getOptions() );
  }

  getPontuacaoAluno() {
    return this.http.get(`${this.endpoint}/Pontuacao-aluno/`, this.getOptions() );
  }

  getPontuacaoColegio() {
    return this.http.get(`${this.endpoint}/Pontuacao-colegio/`, this.getOptions() );
  }

  patchPontuacao(id, pontuacao) {
    return this.http.patch(`${this.endpoint}/Pontuacao/${id}`, {...pontuacao}, this.getOptions() );
  }

  createPontuacaoQuiz(respostas: any)  {
    return this.http.post(`${this.endpoint}/pontuacao-quiz/`, {...respostas}, this.getOptions() );
  }

  getOptions() {
    return { headers: this.getHeaders() , withCredentials: true };
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

}
