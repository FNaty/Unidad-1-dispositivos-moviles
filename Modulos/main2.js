import { Mayusculas, Minusculas, LasDos } from './letraa.js';
import { obtenerPrimero, obtenerUltimo} from './unarreglo.js';

console.log(Mayusculas("hola"));
console.log(Minusculas("HOLA"));
console.log(LasDos("hOLa"));

const num = [1, 2, 3, 4, 5];
console.log(obtenerPrimero(num));
console.log(obtenerUltimo(num));