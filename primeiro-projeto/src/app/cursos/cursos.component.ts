import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  urlPortal: string;
  nomePortal: string;

  cursos: string[]

  constructor(private cursosService: CursosService) {
    this.urlPortal = "http://localhost:4200";
    this.nomePortal = "Franklyn";

    this.cursos = this.cursosService.getCursos();

   }

  ngOnInit() {
  }

}
