import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterAppComponent } from './enter-app/enter-app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'login', component: EnterAppComponent},
  {path: 'login/:usuario', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
