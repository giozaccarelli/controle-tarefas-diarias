import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  logoMenuImage: string = 'assets/resources/images/logo.png';
  usuarios: Object[];

  constructor() {
    this.usuarios = [
      {
        nome: 'Giovanna'
      },
      {
        nome: 'Douglas'
      },
      {
        nome: 'Agatha'
      }
    ]
  }

  ngOnInit(): void {
    console.log(this.usuarios);
  }

  receiverFeedback(respostaFilho: any) {
    console.log('Evento emitido e chegou no Pai >>>', respostaFilho);
  }
}
