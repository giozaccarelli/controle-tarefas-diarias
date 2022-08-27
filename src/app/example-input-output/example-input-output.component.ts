import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example-input-output',
  templateUrl: './example-input-output.component.html',
  styleUrls: ['./example-input-output.component.css']
})
export class ExampleInputOutputComponent implements OnInit {

  @Input() recebeUsuarios: any;
  @Output() respostaUsuarios: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.recebeUsuarios);
    console.log('Objeto Usuário recebido do component Pai via Input: ', this.recebeUsuarios);
  }

  feedback() {
    console.log('Resposta para o componente Pai: ', this.respostaUsuarios.emit({"nome: " : "Manoel"}));
  }
}
