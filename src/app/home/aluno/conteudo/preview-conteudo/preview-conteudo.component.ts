import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-preview-conteudo',
  // Nota-se que usa o mesmo html e css do select-conteudo
  templateUrl: '../select-conteudo/select-conteudo.component.html',
  styleUrls: ['../select-conteudo/select-conteudo.component.scss'],
})
export class PreviewConteudoComponent implements OnInit {
  texto;
  @ViewChild('textohtml') htmlcontainer: ElementRef;
  constructor() { }

  loadHTML(texto) {
    this.htmlcontainer.nativeElement.innerHTML = texto;
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(ev: StorageEvent) { // Cada vez que mudar o texto na storage
    if (ev.key === 'texto') {
      this.loadHTML(ev.newValue);
    }
  }

  ngOnInit() {
    this.loadHTML(window.localStorage.getItem('texto'));
  }

}
