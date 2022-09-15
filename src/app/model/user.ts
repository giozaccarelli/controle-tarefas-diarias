import { Tarefa } from "./tarefa";

export class User {
  name?: string;
  username: string;
  password: string;
  cpf?: string;
  birthday?: Date;
  tarefas: Tarefa[];

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.tarefas = [];
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.tarefas = user.tarefas;

    return u;
  }
}
