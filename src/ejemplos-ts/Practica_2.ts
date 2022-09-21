class Resultado{
  a:number;
  b:number;
  c:number;
  resultado:number;
  resultado2:number;

  Ingresenu(){
      let a =prompt('Ingrese el numero a');
      let b =prompt('Ingrese el numero b');
      let c =prompt('Ingrese el numero c');

      console.log('El numero de a es: ', +a,+b,+c);

}


Resultadoposi():void{
      this.resultado=Math.pow(this.b,2)-(4*(this.a*this.c));
      this.resultado=Math.sqrt(this.resultado);
      this.resultado=(-(this.b))-(this.resultado);
      let total=this.resultado/(2*this.a);
    
      console.log(`El resultado de x1 es: ${this.resultado}`);
      console.log(total);
      
  }

Resultadonega():void{
    this.resultado2=Math.pow(this.b,2)-(4*(this.a*this.c));
    this.resultado2=Math.sqrt(this.resultado);
    this.resultado2=(-(this.b))-(this.resultado);
    let total=this.resultado2/(2*this.a);
    

    console.log(total);

    
    console.log(`El resultado de x2 es: ${this.resultado2}`);
  }

  
}
let calculara= new Resultado();
calculara.Ingresenu();
