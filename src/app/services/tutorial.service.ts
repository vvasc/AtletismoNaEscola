import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TutorialService {
  // Alterar endpoint em Production!!
  private endpoint: string = 'http://www.atletismonaescola.com.br/api';

  constructor(private http: HttpClient) { }

  deleteTutorial(nome = 'aluno') {
    return this.http.delete(`${this.endpoint}/Tutorial/${nome}`, this.getOptions());
  }

  getTutorial(nome = 'aluno') {
    return this.http.get(`${this.endpoint}/Tutorial/${nome}`, this.getOptions());
  }

  editTutorial(form, nome = 'aluno') {
    return this.http.patch(`${this.endpoint}/Tutorial/${nome}`, form, this.getOptions());
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
