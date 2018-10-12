import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AtividadeService {
    private endpoint: string = 'http://localhost:1337';

    constructor(private http: HttpClient) { }

    getAllAtividades() {
        return this.http.get(`${this.endpoint}/Atividade`, { headers: this.getHeaders() });
    }

    patchAtividade(id, atividade) {
        return this.http.patch(`${this.endpoint}/Atividade/${id}`, {...atividade}, { headers: this.getHeaders() });
    }

    createAtividade(atividade) {
        return this.http.post(`${this.endpoint}/Atividade`, {...atividade}, { headers: this.getHeaders() });
    }

    getHeaders() {
        return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept':       'application/json',
    });
  }
}
