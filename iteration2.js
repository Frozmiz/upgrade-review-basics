
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let contador = 0;
let sum = 0;

// Creamos un forof para obtener cada usuario de nuestro array de usuarios.
for (const user of users) {
    // Creamos un forin para acceder a cada clave de cada sonido. (Waves, Wind, Firecamp...)
    for (const key in user.favoritesSounds) {

            //console.log(user.favoritesSounds[key].volume);
            sum = sum + user.favoritesSounds[key].volume;
            contador++;
        }
    }

    console.log("La media de todos los volúmenes es de " + sum/contador);
