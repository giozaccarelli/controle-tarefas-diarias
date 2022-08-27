import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterAppComponent } from './enter-app/enter-app.component';

const routes: Routes = [{path: '', component: EnterAppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
