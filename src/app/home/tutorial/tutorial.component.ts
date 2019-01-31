import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'ngx-tutorial',
  templateUrl: './tutorial.component.html',
  // Nota-se que usa o mesmo template que o select component!
  styleUrls: ['../aluno/conteudo/select-conteudo/select-conteudo.component.scss'],
})
export class TutorialComponent implements OnInit {
  iframeHTML;
  @ViewChild('textohtml') textohtml: ElementRef;

  constructor(
    private tutorialService: TutorialService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tutorialService.getTutorial().subscribe(tut => {
      this.textohtml.nativeElement.innerHTML = tut['iframe'];
    }, err => {
      this.router.navigate(['/home/login']);
    });
  }

}
