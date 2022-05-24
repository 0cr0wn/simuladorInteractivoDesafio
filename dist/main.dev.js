"use strict";

//Simulador interactivo
var carrito = function carrito(sku1, sku2, sku3, iva) {
  var total = sku1 + sku2 + sku3 + sku1 + sku2 + sku3 * iva;
  return total;
};

alert("Hola! bienvenido a ???? compra 3 productos con los siguientes codigos `123456789´ `987654321´ y/o `135798642´");
var productos = Number(prompt("ingrese la cantidad de productos (max.3)"));

while (productos > 3) {
  alert("Debe llevar maximo 3 productos");
  productos = Number(prompt("ingrese la cantidad de productos (max.3)"));
}

for (var i = 0; i > productos; i++) {
  var nombreCliente = prompt("ingrese nombre del cliente");
  var sku1 = {
    nombre: "producto1",
    codigo: 123456789,
    valor: 45000
  };
  var sku2 = {
    nombre: "producto2",
    codigo: 987654321,
    valor: 48000
  };
  var sku3 = {
    nombre: "producto3",
    codigo: 135798642,
    valor: 42000
  };
  var sku = Number(prompt("Ingrese el codigo del producto"));

  while (sku != sku1.codigo || sku != sku2.codigo || sku != sku3.codigo) {
    sku = Number(prompt("Ingrese el codigo del producto"));

    if (sku == sku1.codigo || sku == sku2.codigo || sku == sku3.codigo) {
      alert("Producto agregado satisfactoriamente");
    } else {
      alert("El codigo es incorrecto, ingrese un codigo de nuestros productos.");
    }
  }

  var total = carrito(sku1, sku2, sku3, 0.19);
  alert("el total de la compra más iva es " + total);
  var cliente = {
    nombre: nombreCliente,
    sku1: sku1,
    sku2: sku2,
    sku3: sku3,
    carrito: total
  };
  console.log(cliente);
}