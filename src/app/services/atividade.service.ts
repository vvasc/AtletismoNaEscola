import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AtividadeService {
    private endpoint: string = 'http://www.atletismonaescola.com.br/api';

    constructor(private http: HttpClient) { }

    getAllAtividades() {
        return this.http.get(`${this.endpoint}/Atividade`, this.getOptions() );
    }

    patchAtividade(id, atividade) {
        return this.http.patch(`${this.endpoint}/Atividade/${id}`, {...atividade}, this.getOptions() );
    }

    createAtividade(atividade) {
        return this.http.post(`${this.endpoint}/Atividade`, {...atividade}, this.getOptions() );
    }

    deleteAtividade(id) {
        return this.http.delete(`${this.endpoint}/Atividade/${id}`, this.getOptions() );
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
