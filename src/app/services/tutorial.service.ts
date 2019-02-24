import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TutorialService {
  // Alterar endpoint em Production!!
  private endpoint: string = 'http://www.atletismonaescola.com.br/api';

  constructor(private http: HttpClient) { }

  deleteTutorial() {
    return this.http.delete(`${this.endpoint}/Tutorial`, this.getOptions());
  }

  getTutorial() {
    return this.http.get(`${this.endpoint}/Tutorial`, this.getOptions());
  }

  editTutorial(form) {
    return this.http.patch(`${this.endpoint}/Tutorial`, form, this.getOptions());
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
