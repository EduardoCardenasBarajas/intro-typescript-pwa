
class Operacion{
  a:number;
  b:number;
  c:number;
  resultado1:number;
  resultado2:number;

  Ingresenu(){
      let a =prompt('Ingrese el numero a');
      let b =prompt('Ingrese el numero b');
      let c =prompt('Ingrese el numero c');

      console.log('El numero de a es: ', +a,+b,+c);

      this.Impresion(a,b,c);

}


Impresion(a,b,c):void{
  //x1
      this.resultado1=(-(b)-(Math.sqrt(Math.pow(b,2)-(4*(a*c)))));
      this.resultado1=this.resultado1/(2*a);
      console.log(`El resultado de x1 es: ${this.resultado1}`);
      
      //x2
  this.resultado2=(-(b)+(Math.sqrt(Math.pow(b,2)-(4*(a*c)))));
  this.resultado2=this.resultado2/(2*a);
    
    console.log(`El resultado de x2 es: ${this.resultado2}`);
  }

  
}
let res= new Operacion();
res.Ingresenu();