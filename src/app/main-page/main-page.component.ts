import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Constants } from '../util/constants';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../task/tarefa.service';
import { TarefaPromiseService } from '../services/tarefa-promise.service';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;

  user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
  nomeUsuario: any = this.user.username;
  tarefa!: Tarefa;
  tarefas!: Tarefa[];
  success = false;
  message = '';
  submitted = false;

  constructor(
    private tarefaService: TarefaService,
    private tarefaPromiseService: TarefaPromiseService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    Shared.initalizeWebStorage();
    const user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.tarefa = new Tarefa('', '', '', this.nomeUsuario);
    this.tarefas = this.tarefaService.getTasks();

    this.tarefaPromiseService
      .getByTaskTitle(Constants.TAREFA_KEY)
      .then((t: Tarefa[] = []) => {
        this.tarefa = t[0];
        localStorage.setItem(Constants.TAREFA_KEY, JSON.stringify(this.tarefa));
        }
      )
      .catch((e) => {
        this.tarefa = WebStorageUtil.get(Constants.TAREFA_KEY);
      })
  }

  onSubmit() {
    this.submitted = true;
    this.success = true;
    if(!this.tarefaService.isExist(this.tarefa.titulo)) {
      this.tarefaService.save(this.tarefa);
    } else {
      this.tarefaService.update(this.tarefa);
    }

    this.message = 'Tarefa adicionada com sucesso';
    this.tarefa = new Tarefa('', '', '', '');
    this.tarefas = this.tarefaService.getTasks();
  }

  onButtonClick() {
    console.log(`A tarefa a ser criada será:
                  \nTítulo da tarefa: ${this.tarefa.titulo}
                  \nCategoria da tarefa: ${this.tarefa.categoria}
                  \nPrioridade da tarefa: ${this.tarefa.prioridade}`);
  }

  onButtonClickAgain() {
    console.log('Tarefa registrada.');
  }

  onClickResetForm() {
    this.tarefa = new Tarefa('', '', '',  this.nomeUsuario);
    this.success = false;
    this.message = '';
    this.submitted = false;
    window.alert('Crie uma nova tarefa! :)');
  }

  ngAfterViewInit(): void {

  }
}
