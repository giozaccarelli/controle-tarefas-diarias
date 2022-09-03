import { Constants } from "./constants";
import { User } from "../model/user";

export class Shared {
  constructor() {}

  public static initalizeWebStorage(): void {
    if(localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    let user = new User(Constants.USERNAME_KEY, 'qwerty');

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));
  }
}
