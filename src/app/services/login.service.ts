import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AuthService {
  private endpoint: string = 'http://localhost:1337';

  constructor(
    private http: HttpClient,
    protected localStorage: LocalStorage,
  ) { }

  login(obj: any) {
    return this.http.post(`${this.endpoint}/login/`, {...obj}, { headers: this.getHeaders() });
  }

  signup(obj: any) {
    return this.http.post(`${this.endpoint}/signup/`, {...obj}, { headers: this.getHeaders() });
  }

  Logged(obj: any) {
    this.localStorage.setItemSubscribe('user', { user: obj });
  }

  isLogged() {
    return this.localStorage.getItem('user');
  }

  logout() {
    this.localStorage.clear();
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
