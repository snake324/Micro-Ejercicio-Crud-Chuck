import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerfraseComponent } from './chuck/componentes/verfrase/verfrase.component';

const routes: Routes = [

  { path: '', component: VerfraseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
