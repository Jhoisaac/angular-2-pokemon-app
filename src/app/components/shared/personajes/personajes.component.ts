import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// import { PersonajeService, Personaje } from '../../../services/app.service';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {
  personajes: Pokemon[] = [];

  constructor( private _pokemonService: PokemonService, private _router: Router) {
    console.log('Constructor Personajes');
  }

  // getPersonajes() {
  //   this._pokemonService.getPokemon()
  //     .subscribe(
  //       personajes => this.personajes = personajes,
  //       error => this.errorMessage = <any>error);
  // }

  ngOnInit() {
    console.log('onInit');
    this.loadPokemon();
  }

  verPersonaje(indice: number) {
    this._router.navigate(['/personaje', indice]);
  }

  loadPokemon() {
    this._pokemonService.getData()
      .subscribe(
        data => {
          this.personajes = data;
        },
        err => {
          console.log(err);
        });
  }

}
