export class Tarefa {
    id!: string;
    titulo: string;
    categoria: string;
    prioridade: string;
    username: string;

    constructor(titulo: string,
      categoria: string,
      prioridade: string,
      username: string) {

        this.id = String(Math.round(Math.random() * 1000));
        this.titulo = titulo;
        this.categoria = categoria;
        this.prioridade = prioridade;
        this.username = username;
    }

    public static clone(tarefa: Tarefa) {
      let t: Tarefa = new Tarefa(tarefa.titulo, tarefa.categoria, tarefa.prioridade, tarefa.username);
      t.titulo = tarefa.titulo;
      t.categoria = tarefa.categoria;
      t.prioridade = tarefa.prioridade;
      t.username = tarefa.username;

      return t;
    }
}
