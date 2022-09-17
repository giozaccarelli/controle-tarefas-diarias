import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig,  NgxMaskModule } from 'ngx-mask';

import { AcessarAppComponent } from './acessar-app/acessar-app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterAppComponent } from './enter-app/enter-app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TarefaComponent } from './task/tarefa.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EnterAppComponent,
    InitialPageComponent,
    MainPageComponent,
    UserComponent,
    AcessarAppComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
