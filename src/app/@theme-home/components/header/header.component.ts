import { AuthService } from './../../../services/login.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logado = true;
  isAdmin = true;
  toggle = false;

  @Input() position = 'normal';

  userAsync: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authservice: AuthService,
              private analyticsService: AnalyticsService,
              private route: Router) {
  }

  ngOnInit() {
    this.userAsync = this.authservice.isLogged();
  }

  logout() {
    this.authservice.logout();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  loadadmin() {
    this.route.navigate(['/pages']);
  }

  login() {
  /*   this.logado = !this.logado; */
    this.route.navigate(['/home/login']);
  }

  register() {
    this.route.navigate(['/home/register']);
  }

  admin() {
    this.route.navigate(['/admin/main']);
  }

  rankingAluno() {
    this.route.navigate(['home/aluno/recordes/ranking']);
  }

  rankingProfessor() {
    this.route.navigate(['home/aluno/recordes']);
  }

  quiz() {
    this.route.navigate(['home/aluno/quiz']);
  }

  conteudo() {
    this.route.navigate(['home/aluno/conteudo']);
  }
}
