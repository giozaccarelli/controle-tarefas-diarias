import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaPromiseService {
  URL = 'http://localhost:3000/tasks';
  URL_PT = 'http://localhost:3000/tarefas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  }

  constructor(private httpClient: HttpClient) { }

  getByTaskTitle(titulo: string) {
    return this.httpClient.get<Tarefa[]>(`${this.URL_PT}/${titulo}`).toPromise();
  }

  save(tarefa: Tarefa) {
    return this.httpClient
      .post<Tarefa>(this.URL, JSON.stringify(tarefa), this.httpOptions)
      .toPromise();
  }

  patch(tarefa: Tarefa) {
    return this.httpClient
      .patch<Tarefa>(
        `${this.URL}/${tarefa.id}`,
        JSON.stringify(tarefa),
        this.httpOptions
      )
      .toPromise();
  }

  update(tarefa: Tarefa) {
    return this.httpClient
      .put<Tarefa>(
        `${this.URL}/${tarefa.id}`,
        JSON.stringify(tarefa),
        this.httpOptions
      )
      .toPromise();
  }
}
