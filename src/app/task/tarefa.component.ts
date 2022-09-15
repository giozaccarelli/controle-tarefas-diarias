import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from './tarefa.service';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-task',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  tarefa!: Tarefa;
  tarefas?: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa('', '', '', '');
    this.tarefas = this.tarefaService.getTasks();
  }

  onEdit(tarefa: Tarefa) {
    let clone = Tarefa.clone(tarefa);
    this.tarefa = clone;
  }

  onDelete(titulo: string) {
    let confirmation = window.confirm(
      'Tem certeza que deseja remover a tarefa?'
    );
    if(!confirmation) {
      return;
    }

    let response: boolean = this.tarefaService.delete(titulo);
  }
}
