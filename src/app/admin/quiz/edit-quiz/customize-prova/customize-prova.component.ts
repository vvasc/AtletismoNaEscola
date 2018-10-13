import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-customize-prova',
  template: `
    <div class="row" *ngIf="quizSelected">
      <div class="col-md-12">
        <form [formGroup]="formAtividade">
          <div class="form-group">
            <div class="col-md-12 input-group" >
              <input class="form-control" type="text" formControlName="titulo" placeholder="titulo" id="titulo">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row" *ngIf="quizSelected">
    <div class="col-md-12">
      <nb-card>
      <nb-card-header>
        Conteúdo
      </nb-card-header>
      <nb-card-body>
        <div *ngIf="quizSelected?.conteudo && quizSelected?.conteudo.length; else naoHaConteudo">
        {{quizSelected.conteudo[0].titulo}}
        </div>
        <ng-template #naoHaConteudo>
        Não há conteúdo associado à esta prova
        </ng-template>
      </nb-card-body>
      </nb-card>
    </div>
  </div>
  <div *ngIf="showQuestoes">
    <cdk-drop (dropped)="dropped($event)">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center" *ngFor="let showQuestao of showQuestoes" cdkDrag>
          <div class="row box">
            <div class="col-12">
              <div>
                <nb-card>
                  <nb-card-header>
                  <div cdkDragHandle class="btn btn-success"><i class="fa fa-pencil"></i>
                  </div>  Pergunta: {{ showQuestao.Pergunta }}
                  </nb-card-header>
                  <nb-card-body>
                    <div
                      class="col input-group"
                      *ngFor="let alternativas of showQuestao.Alternativas | objectToArray; let i = index">
                      <label for="alternativas">
                      Alternativa {{ i+1 }}: {{ alternativas }}
                      </label>
                    </div>
                  </nb-card-body>
                </nb-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cdk-drop>
  </div>
  <div class="row">
    <div class="col-md-2">
      <button type="button" class="btn btn-primary" (click)="createProva()">Editar Prova</button>
    </div>
  </div>
  `,
})

export class CustomizeProvaComponent implements OnChanges, OnInit {
  @Input() quizSelected: any = null;
  formAtividade: FormGroup;
  questoesSelected: any;
  showQuestoes: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formAtividade = this.fb.group({
      titulo: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('quizSelected' in changes && changes.quizSelected.currentValue !== changes.quizSelected.previousValue) {
      // tslint:disable-next-line:max-line-length
      !changes.quizSelected.previousValue || changes.quizSelected.previousValue.id !== changes.quizSelected.currentValue.id ? this.patchDrangDrop(changes.quizSelected.currentValue) : null;
    }
  }

  patchDrangDrop(quizSelected: any) {
    this.formAtividade.patchValue(quizSelected);
    this.showQuestoes = ('questoes' in quizSelected) ? quizSelected.questoes : null;
  }

  createProva() {

  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.showQuestoes,
      event.previousIndex,
      event.currentIndex,
    );
  }

}
