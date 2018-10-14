import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizSailsService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllQuestoes() {
    return this.http.get(`${this.endpoint}/Questoes`, { headers: this.getHeaders() });
  }

  getQuestao(id: number) {
    return this.http.get(`${this.endpoint}/Questoes/${id}`, { headers: this.getHeaders() });
  }

  createQuestao(questao: any) {
    return this.http.post(`${this.endpoint}/Questoes/`, {...questao}, { headers: this.getHeaders() }).subscribe();
  }

  createQuiz(quiz: any) {
    return this.http.post(`${this.endpoint}/Quiz/`, {...quiz}, { headers: this.getHeaders() }).subscribe();
  }

  getQuizesLivres() {
    return this.http.get(`${this.endpoint}/Quizes-livres/`, { headers: this.getHeaders() });
  }

  getAllQuiz() {
    return this.http.get(`${this.endpoint}/Quiz/`, { headers: this.getHeaders() });
  }

  patchQuiz(id: number|string, quiz: any) {
    return this.http.patch(`${this.endpoint}/Quiz/${id}`, {...quiz}, { headers: this.getHeaders() });
  }

  getQuiz(id: number|string) {
    return this.http.get(`${this.endpoint}/Quiz/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

}
