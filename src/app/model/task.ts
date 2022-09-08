export class Task {

    constructor(public titulo: string,
      public categoria: string,
      public prioridade: string,
      public username: string) {

        this.titulo = titulo;
        this.categoria = categoria;
        this.prioridade = prioridade;
        this.username = username;
    }
}
