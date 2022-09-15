
interface  alumnoUTL{
    nombre:string;
    edad:number;
    mostrarDireccion:()=>void;
    direccion:{
        calle:string;
        pais:string;
        estado:string;
    }

}



const AlumnoUTL:alumnoUTL={
    nombre:'Lilith',
    edad:23,
    direccion:{
        calle:'Santuario',
        pais:'MX',
        estado:'Culiacan'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '
        +this.direccion.pais;
    }
}
const Direccion=AlumnoUTL.mostrarDireccion();
console.log(Direccion);