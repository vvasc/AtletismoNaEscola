import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProvaService {
  private endpoint: string = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getAllProvas() {
    return this.http.get(`${this.endpoint}/Provapratica/`, { headers: this.getHeaders()} );
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }
}
