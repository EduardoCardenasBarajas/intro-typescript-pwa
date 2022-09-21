
//clases

class Persona{
    nombre:string;
    edad:number;


    imprimir():void{
        console.log(`El nombre es: ${this.nombre} \n
        La edad es: ${this.edad}`);
    }
}
let persona1=new Persona();
persona1.nombre='Angela';
persona1.edad=22;
persona1.imprimir();
