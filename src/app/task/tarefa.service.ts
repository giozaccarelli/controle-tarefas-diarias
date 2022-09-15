import { Constants } from "../util/constants";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { Tarefa } from "../model/tarefa";
import { WebStorageUtil } from "../util/web-storage-util";

@Injectable({
  providedIn: 'root',
})

export class TarefaService {
  tarefas!: Tarefa[];

  constructor() {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
  }

  save(tarefa: Tarefa) {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
    this.tarefas.push(tarefa);
    WebStorageUtil.set(Constants.TAREFA_KEY, this.tarefas);
  }

  update(tarefa: Tarefa) {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
    this.delete(tarefa.titulo);
    this.save(tarefa);
  }

  delete(titulo: string): boolean {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
    this.tarefas = this.tarefas.filter((t) => {
      return t.titulo?.valueOf() != titulo?.valueOf();
    });

    WebStorageUtil.set(Constants.TAREFA_KEY, this.tarefas);
    return true;
  }

  isExist(value: string): boolean {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
    for(let t of this.tarefas) {
      if(t.titulo?.valueOf() == value?.valueOf()) {
        return true;
      }
    }

    return false;
  }

  getTasks(): Tarefa[] {
    this.tarefas = WebStorageUtil.get(Constants.TAREFA_KEY);
    return this.tarefas;
  }
}
