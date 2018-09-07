import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Automaticamente injetado na raiz da aplicacao, todos usam a mesma instancia(singleton)
})
export class BackgroundService {
    protected backgroundstate$ = new BehaviorSubject('fundo-main'); // Emite o nome da class de css para trocar de fundo

    constructor() { }

    onBackgroundChange(): Observable<any> {
        return this.backgroundstate$.asObservable();
    }

    setBackground(background: string) {
        this.backgroundstate$.next(background);
    }

}


