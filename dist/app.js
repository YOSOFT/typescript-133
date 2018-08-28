"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = require("./producto");
const decoradores_1 = require("./decoradores");
let Computador = class Computador {
    constructor(marca) {
        this.marca = marca;
        console.log(this.marca);
        console.log(producto_1.dias);
    }
};
Computador = __decorate([
    decoradores_1.registro
], Computador);
var producto = new producto_1.Producto();
var apple = new Computador("apple");
var acer = new Computador("acer");
