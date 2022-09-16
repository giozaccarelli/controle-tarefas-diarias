import { Component, NgModule, OnInit, ViewChild } from '@angular/core';

import { Constants } from '../util/constants';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Shared } from '../util/shared';
import { User } from '../model/user';
import { UserService } from './user.service';
import { WebStorageUtil } from '../util/web-storage-util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = true;
  isSuccess!: boolean;
  message!: string;

  responseUsers?: Observable<any> | any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    Shared.initalizeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
    this.responseUsers = this.userService.getUsersFromApi();
  }

  onSubmit() {
    this.isSubmitted = true;
    if(!this.userService.isExist(this.user.username)) {
      this.userService.save(this.user);
    } else {
      this.userService.update(this.user);
    }

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

  /**
   * @param user
   */
  onEdit(user: User) {
    let clone = User.clone(user);
    this.user = clone;
  }

  onDelete(name: string) {
    let confirmation = window.confirm('Tem certeza que deseja remover ' + name);

    if(!confirmation) {
      return;
    }

    let response: boolean = this.userService.delete(name);
    this.isShowMessage = true;
    this.isSuccess = response;
    if(response) {
      this.message = 'O usuário foi removido com sucesso!';
    } else {
      this.message = 'Oops! O usuário não pôde ser removido.';
    }

    this.users = this.userService.getUsers();
  }
}
