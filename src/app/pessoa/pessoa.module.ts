import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoaFormComponent, PessoaListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PessoaModule { }
