import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { find } from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';

import { TableService } from '../../../services/table.service';


@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class TableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() dataAsync: Observable<any>; // Observable que indica para a busca dos objetos da tabela
  @Input() deleteData: any = [];
  @Input() titulo: string = '';
  @Input() columns: string; // Determina colunas mostradas
  @Input() edit: boolean = false; // Ativa ou desativa a edicao
  @Input() update: any = null; // Use para dar update na table
  @Input() remove: number|string = null; // Use para id que deseja remover
  @Output() editE = new EventEmitter(); // Objeto com id especifico emitido para ser tratado no component pai
  @Output() editConfirm = new EventEmitter(); // Retorna objeto com informacoes sobre a linha editada
  private unsubscribeData: Subject<void> = new Subject();
  dataSource: any = [];
  source: LocalDataSource = new LocalDataSource();
  settings: any = [];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.initializeComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('update' in changes) { // Só estara presente em changes se foi alterado
      // tslint:disable-next-line:max-line-length
      !changes.update.firstChange ? this.reInitialize(changes.update.currentValue) : null;
    }
    if ('remove' in changes && changes.remove.currentValue !== changes.remove.previousValue) {
      // tslint:disable-next-line:max-line-length
      !changes.remove.previousValue || changes.remove.previousValue !== changes.remove.currentValue ? this.removeElement(changes.remove.currentValue) : null;
    }
  }

  reInitialize(update: any)  {
    if (find(this.dataSource, ['id', update.id])) {
      this.source.update(find(this.dataSource, ['id', update.id]), update);
    }
  }

  initializeComponent() {
    this.tableService.setEdit(this.edit);
    this.settings = this.tableService.getColumns(this.columns);
    this.dataAsync.pipe(takeUntil(this.unsubscribeData)).subscribe(res => {
      this.dataSource = res;
      this.source.load(res);
    });
  }

  onDelete(event): void {
    if (window.confirm('Tem certeza que deseja deletar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  foundObject(event: any) {
    this.editE.emit(event.data);
  }

  removeElement(id) {
    this.source.remove(find(this.dataSource, ['id', id]));
  }

  emitConfirm(event: any) { // Emite o evento recebido da table com as info do evento escolhido
    this.editConfirm.emit(event.data); // Emite o evento para ser tratado no pai
  }

  ngOnDestroy() {
    this.unsubscribeData.next();
    this.unsubscribeData.complete();
  }

}
