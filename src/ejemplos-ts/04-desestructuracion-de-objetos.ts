//desestructuracion de objetos y arreglos

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion: string;
    detalles:Detalles;
}
interface Detalles{
    autor: string;
    year: number;
}
const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Chona',
    detalles:{
        autor:'tucanes',
        year:1990,
    }
}

const{volumen,segundo,cancion,detalles}=reproductor; //desestructurar un objeto con llaves
const{autor}=detalles;
console.log(`El volumen actual es: ${volumen}` );
console.log(`El segundo actual es: ${segundo}` );
console.log(`La cancion actual es: ${cancion}` );
console.log(`El autor actual es: ${autor}` );

//arreglo
const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 1: ${dbz[1]}`);
console.log(`Personaje 1: ${dbz[2]}`);
console.log(`Personaje 1: ${dbz[3]}`);
const[a,,,d]=dbz;
console.log(`Personaje 1: ${[a]}`);
// console.log(`Personaje 1: ${[b]}`);
// console.log(`Personaje 1: ${[c]}`);
console.log(`Personaje 1: ${[d]}`);   //desestructurar es con lo corchetes arreglos
