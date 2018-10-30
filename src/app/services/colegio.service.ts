import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ColegioService {
  private endpoint: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  deleteColegio(id) {
    return this.http.delete(`${this.endpoint}/colegio/${id}`, this.getOptions() );
  }

  createColegio(colegio: any) {
    return this.http.post(`${this.endpoint}/Colegio/`, {...colegio}, this.getOptions() );
  }

  getAllColegio() {
    return this.http.get(`${this.endpoint}/Colegio/`, this.getOptions() );
  }

  getColegio(id: number) {
    return this.http.get(`${this.endpoint}/Colegio/${id}`, this.getOptions() );
  }

  patchColegio(id, colegio: any) {
    return this.http.patch(`${this.endpoint}/Colegio/${id}`, {...colegio}, this.getOptions() );
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
