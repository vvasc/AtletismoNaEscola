import 'style-loader!angular2-toaster/toaster.css';

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificacaoService {
  constructor(private toastr: ToastrService) {}

  /* ngx toast */
  ngxtoaster(titulo: string, msg: string, sucesso: boolean) {
    sucesso ? this.toastr.success(msg, titulo) : this.toastr.error(msg, titulo);
  }
}
