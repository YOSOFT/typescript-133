import { Producto, dias } from './producto'
import { registro } from './decoradores'

interface IConmputador {
    marca: string,
    modelo?: string
}

@registro
class Computador implements IConmputador
{
    marca: string;
    
    constructor(marca:string){
      this.marca = marca;
        console.log(this.marca);
        console.log(dias);
    }
   
}
var producto = new Producto();
var apple = new Computador("apple");
var acer = new Computador("acer");
