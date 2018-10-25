import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizSailsService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllQuestoes() {
    return this.http.get(`${this.endpoint}/Questoes`, this.getOptions());
  }

  getQuestao(id: number) {
    return this.http.get(`${this.endpoint}/Questoes/${id}`, this.getOptions());
  }

  createQuestao(questao: any) {
    return this.http.post(`${this.endpoint}/Questoes/`, {...questao}, this.getOptions()).subscribe();
  }

  createQuiz(quiz: any) {
    return this.http.post(`${this.endpoint}/Quiz/`, {...quiz}, this.getOptions()).subscribe();
  }

  getQuizesLivres() {
    return this.http.get(`${this.endpoint}/Quizes-livres/`, this.getOptions());
  }

  getAllQuiz() {
    return this.http.get(`${this.endpoint}/Quiz/`, this.getOptions());
  }

  patchQuiz(id: number|string, quiz: any) {
    return this.http.patch(`${this.endpoint}/Quiz/${id}`, {...quiz}, this.getOptions());
  }

  getQuiz(id: number|string) {
    return this.http.get(`${this.endpoint}/Quiz/${id}`, this.getOptions());
  }

  deleteQuiz(id: number|string) {
    return this.http.delete(`${this.endpoint}/Quiz/${id}`, this.getOptions());
  }

  quizNaoRespondido() {
    return this.http.get(`${this.endpoint}/quiz-nao-respondido`, this.getOptions());
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
