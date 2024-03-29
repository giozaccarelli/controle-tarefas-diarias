import { Constants } from "../util/constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { WebStorageUtil } from "../util/web-storage-util";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  public url = "http://localhost:3000/usuarios";

  users!: User[];
  constructor(private http: HttpClient) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
  }

  save(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users.push(user);
    WebStorageUtil.set(Constants.USERS_KEY, this.users);
  }

  update(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.delete(user.username);
    this.save(user);
  }

  delete(username: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users = this.users.filter((u) => {
      return u.username?.valueOf() != username?.valueOf();
    });

    WebStorageUtil.set(Constants.USERS_KEY, this.users);
    return true;
  }

  isExist(value: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    for(let u of this.users) {
      if(u.username?.valueOf() == value?.valueOf()) {
        return true;
      }
    }

    return false;
  }

  getUsers(): User[] {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    return this.users;
  }

  getUsersFromApi(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
