import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService, Personaje } from '../../../services/app.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
})
export class PersonajeComponent implements OnInit {
  personaje: Personaje = {
    nombre: null,
    descripcion: null,
    numero: null,
    tipo: null,
    fecha: null,
    img: null,
    evolucion: null,
    nomEvolucion: null
  };

  constructor( private _activatedRoute: ActivatedRoute, private _pokemonService: PersonajeService, private _router: Router) {
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params['id']);
        this.personaje = this._pokemonService.getPersonaje(params['id']);
        console.log(this.personaje);
      }
    );
  }

  ngOnInit() {
  }

  regresar() {
    this._router.navigate(['personajes']);
  }

}
