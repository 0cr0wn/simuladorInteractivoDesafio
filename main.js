//Simulador interactivo
let total




let compraFinal
// Funcion Carrito
const compra = (sku) => {
    total =
        (sku.valor + sku.valor + sku.valor) * 1.19;
    compraFinal = total;
    return compraFinal;


};

const nombreCliente = prompt("ingrese nombre del cliente");
alert(
    "Hola! bienvenido " + nombreCliente + " compra 3 productos con los siguientes codigos `123456789´ `987654321´ y/o `135798642´"
);


let productos = Number(prompt("ingrese la cantidad de productos (max.3)"));

while (productos <= 1 && productos > 3) {
    alert("Debe llevar maximo 3 productos");
    productos = Number(prompt("ingrese la cantidad de productos (max.3)"));
}


let sku1 = {
    nombre: "producto1",
    codigo: 123456789,
    valor: 45000,
};

let sku2 = {
    nombre: "producto2",
    codigo: 987654321,
    valor: 48000,
};

let sku3 = {
    nombre: "producto3",
    codigo: 135798642,
    valor: 42000,
};

let sku = [sku1, sku2, sku3]

for (let i = 0; i < productos; i++) {

    sku = Number(prompt("Ingrese el codigo del producto"));

    while (sku != sku1.codigo || sku != sku2.codigo || sku != sku3.codigo) {


        if (sku == sku1.codigo || sku == sku2.codigo || sku == sku3.codigo) {
            alert("Producto agregado satisfactoriamente");

        } else {
            alert(
                "El codigo es incorrecto, ingrese un codigo de nuestros productos.",


            );
            sku = Number(prompt("Ingrese el codigo del producto"));

        }
        break



    }


    let cliente = {
        nombre: nombreCliente,
        sku1: sku1,
        sku2: sku2,
        sku3: sku3,
        carrito: compraFinal,
    };

    console.log(cliente);

}


alert("el total de la compra más iva es " + compraFinal);
// Funcion Carrito
