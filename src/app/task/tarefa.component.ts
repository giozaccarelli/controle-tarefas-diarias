import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from './tarefa.service';
import { TarefaPromiseService } from '../services/tarefa-promise.service';
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

  constructor(private tarefaService: TarefaService,
    private tarefaPromiseService: TarefaPromiseService) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa('', '', '', '');

    this.tarefaPromiseService
      .getByTaskTitle(this.tarefa.titulo)
      .then((t: Tarefa[] = []) => {
        this.tarefa = t[0];
        localStorage.setItem(Constants.TAREFA_KEY, JSON.stringify(this.tarefa));
        console.log(t);
        this.tarefas = t;
        }
      )
      .catch((e) => {
        this.tarefa = WebStorageUtil.get(Constants.TAREFA_KEY);
      });
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
