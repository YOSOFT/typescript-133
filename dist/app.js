"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = require("./producto");
class Computador {
    constructor(marca) {
        this.marca = marca;
        console.log(this.marca);
    }
}
var producto = new producto_1.Producto();
var apple = new Computador("apple");
var acer = new Computador("acer");
