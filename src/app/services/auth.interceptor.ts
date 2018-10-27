import { AuthService } from './login.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authservice: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).pipe(
            catchError( (err, obs) => { // Pega o erro do HTTP Response
                if (err.error && err.error === 'USUÁRIO NÃO RECONHECIDO')
                    this.authservice.logout();
                return throwError(err); // Observable vazia pra parar execuação
            }),
        );
    }
}
