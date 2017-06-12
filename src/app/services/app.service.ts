/**
 * Created by jh0n4 on 1/6/17.
 */
import { Injectable } from '@angular/core';

@Injectable()

export class PersonajeService {
  private datos: Personaje[] = [
    {
      nombre: 'Charmander',
      descripcion: 'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre.',
      numero: 5,
      tipo: 'Fuego',
      fecha: '1989-12-01',
      img: 'assets/c.png',
      evolucion: 'assets/ch.png',
      nomEvolucion: 'Charizard'
    },
    {
      nombre: 'Bulbasaur',
      descripcion: 'Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más',
      numero: 1,
      tipo: 'Planta',
      fecha: '1789-06-04',
      img: 'assets/b.png',
      evolucion: 'assets/v.png',
      nomEvolucion: 'Venusaur'
    },
    {
      nombre: 'Squirtle',
      descripcion: 'El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras ',
      numero: 7,
      tipo: 'Agua',
      fecha: '1992-06-12',
      img: 'assets/s.png',
      evolucion: 'assets/bl.png',
      nomEvolucion: 'Blastoise'
    },
  ];

  constructor() {
    console.log('Servicio Listo');
  }

  getPersonajes(): Personaje[] {
    return this.datos;
  }
  getPersonaje(indice: number): Personaje {
    return this.datos[indice];
  }
  buscarPersonaje(termino: string): Personaje[] {
    const personajesArr: Personaje[] = [];
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

export interface Personaje {
  nombre: string;
  descripcion: string;
  numero: number;
  tipo: string;
  fecha: string;
  img: string;
  evolucion: string;
  nomEvolucion: string;
}
