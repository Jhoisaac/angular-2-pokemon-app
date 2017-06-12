import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService, Personaje } from '../../../services/app.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor( private _personajeService: PersonajeService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.personajes = this._personajeService.buscarPersonaje(params['termino']);
    });
  }
}
