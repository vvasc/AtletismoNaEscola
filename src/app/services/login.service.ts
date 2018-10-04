import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  login(obj: any) {
    return this.http.post(`${this.endpoint}/login/`, {...obj}, { headers: this.getHeaders() });
  }

  signup(obj: any) {
    return this.http.post(`${this.endpoint}/signup/`, {...obj}, { headers: this.getHeaders() });
  }
  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
