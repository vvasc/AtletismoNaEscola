import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  private endpoint: string = 'http://localhost:8081';

  constructor(
    private http: HttpClient,
    protected localStorage: LocalStorage,
    private route: Router,
  ) { }

  login(obj: any) {
    return this.http.post(`${this.endpoint}/login/`, {...obj}, { headers: this.getHeaders() , withCredentials: true });
  }

  signup(obj: any) {
    return this.http.post(`${this.endpoint}/signup/`, {...obj}, { headers: this.getHeaders() });
  }

  Logged(obj: any) {
    this.localStorage.setItemSubscribe('user', obj);
  }

  isLogged() {
    return this.localStorage.getItem('user');
  }

  logout() {
    this.localStorage.clear().subscribe(() => {});
    this.route.navigate(['/home/main']);
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
