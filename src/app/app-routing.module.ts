import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MilitanteComponent } from './militante/militante.component';
import { PersoneroComponent } from './personero/personero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'militante',
    component: MilitanteComponent
  },
  {
    path: 'personero',
    component: PersoneroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
