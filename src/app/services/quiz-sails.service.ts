import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class QuizSailsService {
  endpoint: 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllQuestoes() {
    return this.http.get(`http://localhost:1337/Questoes`, { headers: this.getHeaders() });
  }

  getQuestaoAsync(cat$: Subject<number>) {
    const queryObservable = cat$.pipe(
      switchMap(cat =>
        this.http.get(`http://localhost:1337/Questoes/${cat}`, { headers: this.getHeaders() }),
      ),
    );
    return queryObservable;
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
