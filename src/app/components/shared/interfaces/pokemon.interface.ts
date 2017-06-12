/**
 * Created by jh0n4 on 8/6/17.
 */
export interface Pokemon {
  nombre: string;
  descripcion: string;
  numero: number;
  tipo: string;
  fecha: Date;
  img: string;
  nomEvolucion: string;
  evolucion: string;
  key$?: string;
}
