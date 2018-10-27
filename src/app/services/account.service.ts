import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllAccounts() {
    return this.http.get(`${this.endpoint}/Account`, this.getOptions() );
  }

  createAccount(account) {
    return this.http.post(`${this.endpoint}/Account`, {...account} , this.getOptions() );
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
