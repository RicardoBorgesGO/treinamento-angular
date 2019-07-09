import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;

  constructor() { }

  ngOnInit() {
  }

  save():void {
    alert(this.pessoa.nome + '\n' + this.pessoa.telefone);
  }

}
