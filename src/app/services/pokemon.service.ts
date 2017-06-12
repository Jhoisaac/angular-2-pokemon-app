import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Pokemon } from '../components/shared/interfaces/pokemon.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PokemonService {
  pokemonURL: string = 'https://pokemon-c9325.firebaseio.com/pokemon.json';
  pokemonGetURL: string = 'https://pokemon-ff052.firebaseio.com/pokemon.json';
  private datos: Pokemon[] = [];

  constructor(private _http: Http) {
    console.log('Servicio Listo');
  }
  nuevoPokemon(nuevo: Pokemon) {
    const body = JSON.stringify(nuevo);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.post(this.pokemonURL, body, {headers: headers})
      .map(
        res => {
          console.log( res.json );  // nunca se ejecuta si es que no pongo subscribe
          return res.json;
        }
      );
  }
  getData(): Observable<Pokemon[]> {
    return this._http.get(this.pokemonGetURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  getPersonaje(indice: number): Pokemon {
    return this.datos[indice];
  }
  buscarPersonaje(termino: string): Pokemon[] {
    const personajesArr: Pokemon[] = [];
    termino = termino.toLowerCase();
    for (const personaje of this.datos){
      const nombre = personaje.nombre.toLowerCase();
      if ( nombre.indexOf(termino) >= 0 ) {
        personajesArr.push(personaje);
      }
    }

    return personajesArr;
  }

}
