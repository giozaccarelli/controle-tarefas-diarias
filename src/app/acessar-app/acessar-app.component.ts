import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-acessar-app',
  templateUrl: './acessar-app.component.html',
  styleUrls: ['./acessar-app.component.css']
})
export class AcessarAppComponent implements OnInit {
  user!: User;
  loginUser!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    if(this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password) {
        WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
        this.router.navigate(['pagina-inicial']);
      } else {
        alert(
          'Oops! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
        );
      }
  }
}
