import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizSailsService {
  endpoint: 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllQuestoes() {
    return this.http.get(`http://localhost:1337/Questoes`, { headers: this.getHeaders() });
  }

  getQuestaoAsync(id: number) {
    return this.http.get(`http://localhost:1337/Questoes/${id}`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
