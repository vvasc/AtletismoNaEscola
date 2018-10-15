import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { cloneDeep, find, remove } from 'lodash';
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
  private unsubscribeDataId: Subject<void> = new Subject();
  keysSettings: any = [];
  dataSource: any = [];
  dataSync: any;
  source: LocalDataSource = new LocalDataSource();
  settings: any = [];
  editEvento: boolean = false;
  eventoResolved: any = [];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.initializeComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('update' in changes && changes.update.currentValue !== changes.update.previousValue) {
      // tslint:disable-next-line:max-line-length
      !changes.update.previousValue || changes.update.previousValue.id !== changes.update.currentValue.id ? this.reInitialize(changes.update.currentValue) : null;
    }
    if ('remove' in changes && changes.remove.currentValue !== changes.remove.previousValue) {
      // tslint:disable-next-line:max-line-length
      !changes.remove.previousValue || changes.remove.previousValue !== changes.remove.currentValue ? this.removeElement(changes.remove.currentValue) : null;
    }
  }

  initializeData(data: any) {
    this.dataSync = cloneDeep(data);
    return this.dataSource = data.map(response => {
      for (const key in response) {
        if (!this.keysSettings.includes(key)) {
          delete response[key];
        }
      }
      return response;
    });
  }

  updateData(data: any) {
    const clone = cloneDeep(data);
    for (const key in clone) {
      if (!this.keysSettings.includes(key)) {
        delete clone[key];
      }
    }
    return clone;
  }

  reInitialize(update: any)  {
    if (find(this.dataSource, ['id', update.id])) {
      remove(this.dataSync, ['id', update.id]);
      this.dataSync.push(update);
      this.source.update(find(this.dataSource, ['id', update.id]), this.updateData(update));
    }
  }

  initializeComponent() {
    this.tableService.setEdit(this.edit);
    this.settings = this.tableService.getColumns(this.columns);
    for (const key in this.settings.columns) {
      if (this.settings.columns[key]) {
        this.keysSettings.push(key);
      }
    }

    this.dataAsync.pipe(takeUntil(this.unsubscribeData)).subscribe(res => {
      this.source.load(this.initializeData(res));
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
    this.editE.emit(find(this.dataSync, event.data));
  }

  removeElement(id) {
    this.source.remove(find(this.dataSource, ['id', id]));
  }

  emitConfirm(event: any) { // Emite o evento recebido da table com as info do evento escolhido
    const eventData = find(this.dataSync, event.data); // Informacoes necessarias do evento
    const resp = {
      event, // Dados sobre a edicao
      eventData,
    };
    this.editConfirm.emit(resp); // Emite o evento para ser tratado no pai
  }



  ngOnDestroy() {
    this.unsubscribeData.next();
    this.unsubscribeDataId.next();
    this.unsubscribeDataId.complete();
    this.unsubscribeData.complete();
  }

}
