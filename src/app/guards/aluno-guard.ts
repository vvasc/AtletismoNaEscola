import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/login.service';

@Injectable()
export class AlunoGuard implements CanActivate {
  constructor(
    public authService: AuthService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLogged().pipe(map(user => {
      // tslint:disable-next-line:max-line-length
      return user && (user.role === 'aluno') || (user.role === 'superadmin' || user.role === 'diretor' || user.role === 'professor');
    }));
  }

}
