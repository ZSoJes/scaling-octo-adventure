import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeticionComponent } from './vista/peticion/peticion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'peticion'},
  { path: 'peticion', component: PeticionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
