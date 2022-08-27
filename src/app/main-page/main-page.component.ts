import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nomeUsuario: any;

  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.nomeUsuario = this.activatedRoute.snapshot.paramMap.get("usuario");
  }

}
