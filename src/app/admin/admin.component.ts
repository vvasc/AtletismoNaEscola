import { AuthService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { PROFESSOR_MENU_ITEMS, SUPERADMIN_MENU_ITEMS, DIRETOR_MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  ADMIN_MENUS = {
    professor: PROFESSOR_MENU_ITEMS,
    superadmin: SUPERADMIN_MENU_ITEMS,
    diretor: DIRETOR_MENU_ITEMS,
  };
  menu = PROFESSOR_MENU_ITEMS; // Menu escolhido
  userinfo: any;

  constructor(private authservice: AuthService) { }

  ngOnInit() { // Escolhe o menu do admin para mostrar dependendo do cargo do admin
    this.authservice.isLogged().subscribe( data => {
      this.userinfo = data;
      this.menu = this.ADMIN_MENUS[this.userinfo.role];
    });
  }

}
