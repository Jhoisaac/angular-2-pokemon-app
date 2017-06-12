import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [ ]
})
export class FormularioComponent implements OnInit {
  pokemon: Pokemon = {
    nombre: null,
    descripcion: null,
    numero: null,
    tipo: null,
    fecha: null,
    img: null,
    evolucion: null,
    nomEvolucion: null,
  };
  tipos = [
    'Agua', 'Fuego',
    'Viento', 'Tierra',
    'Planta', 'Rayo',
    'Veneno', 'Luchador'
  ];
  habilitado: boolean = true;
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
  }

  guardar(forma: any) {
    // console.log('Guardar');
    // console.dir(forma);
    // console.log(forma.value.nombre);
    // console.log(forma.value.apellido);
    // console.log(forma.value.correo);

    console.log(this.pokemon);
    this.habilitado = false;
    this._pokemonService.nuevoPokemon(this.pokemon)
      .subscribe(
        data => {
          console.log(data);
          this.habilitado = false;
        },
        error => {
          console.log(error);
        }
      );
  }

}
