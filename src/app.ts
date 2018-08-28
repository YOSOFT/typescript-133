import { Producto } from './producto'

interface IConmputador {
    marca: string,
    modelo?: string
}

class Computador implements IConmputador
{
    marca: string;
    
    constructor(marca:string){
      this.marca = marca;
        console.log(this.marca);
    }
   
}
var producto = new Producto();
var apple = new Computador("apple");
var acer = new Computador("acer");
