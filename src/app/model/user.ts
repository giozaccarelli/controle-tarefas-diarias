export class User {
  name?: string;
  username: string;
  password: string;
  cpf?: string;
  birthday?: Date;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday

    return u;
  }
}
