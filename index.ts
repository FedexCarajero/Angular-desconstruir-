// IMPORTANTE:
// Ver la consola de JavaScript

interface cancion {
  nombre: string;
  genero: string;
  anio: number;
  autor: string;
}

const reproductor: cancion = {
  nombre: 'Numb',
  genero: 'Rock Alternativo',
  anio: 2003,
  autor: 'Linkin park',
};

const { nombre, genero } = reproductor;

/*console.log('La cancion se llama:',nombre);
console.log('El genero de la cancion es:', genero);*/


/*Desconstruir arreglos*/
const personajes: string[] = ['Ezio', 'Leon', 'Dante'];

const [p1, p2, p3] = personajes;

console.log(p3);
console.log(p2);
console.log(p1);
