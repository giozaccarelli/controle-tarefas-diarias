import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterAppComponent } from './enter-app/enter-app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent } from './user/user.component';
import { AcessarAppComponent } from './acessar-app/acessar-app.component';

const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'escolher-opcao', component: EnterAppComponent},
  {path: 'escolher-opcao/cadastrar-usuario', component: UserComponent},
  {path: 'escolher-opcao/acessar-app', component: AcessarAppComponent},
  {path: 'pagina-inicial', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
