import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './alo-mundo/alo-mundo.component';
import { SegundoComponenteTesteComponent } from './segundo-componente-teste/segundo-componente-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    SegundoComponenteTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
