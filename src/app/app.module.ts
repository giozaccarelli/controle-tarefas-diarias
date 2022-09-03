import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig,  NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EnterAppComponent } from './enter-app/enter-app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent } from './user/user.component';
import { AcessarAppComponent } from './acessar-app/acessar-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EnterAppComponent,
    InitialPageComponent,
    MainPageComponent,
    UserComponent,
    AcessarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
