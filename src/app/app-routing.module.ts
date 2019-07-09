import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaListComponent},
  {path: 'pessoa/new', component: PessoaFormComponent},
  {path: 'pessoa/edit/:id', component: PessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
