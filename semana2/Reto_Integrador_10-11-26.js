const sinAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function redondear(n, decimales) {
    return Number(n.toFixed(decimales));
}

function limpiarRegistro(texto) {
    const ventas = [];
    const lista = texto.split(";");

    for (let i = 0; i < lista.length; i++) {
        const partes = lista[i].split(":");

        if (partes.length !== 2) {
            continue;
        }

        const producto = sinAcentos(partes[0]).toLowerCase().trim().replace(/\s+/g, " ");
        const textoPrecio = partes[1].trim();
        const precio = Number(textoPrecio);

        if (producto === "" || textoPrecio === "" || !Number.isFinite(precio) || precio <= 0) {
            continue;
        }

        ventas.push({ producto: producto, precio: precio });
    }

    return ventas;
}

const sumar = function (...precios) {
    const total = precios.reduce((acum, p) => acum + p, 0);
    return redondear(total, 2);
};

const resumenPorProducto = (ventas) => {
    const resumen = [];

    for (let i = 0; i < ventas.length; i++) {
        const venta = ventas[i];
        const existente = resumen.find((r) => r.producto === venta.producto);

        if (existente) {
            existente.veces += 1;
            existente.ingreso = sumar(existente.ingreso, venta.precio);
        } else {
            resumen.push({ producto: venta.producto, veces: 1, ingreso: venta.precio });
        }
    }

    return resumen.sort((a, b) => b.ingreso - a.ingreso || a.producto.localeCompare(b.producto, "es"));
};

function descuento(precio, porcentaje = 15) {
    return redondear(precio - (precio * (porcentaje / 100)), 2);
}

function aplicarATodos(lista, fn) {
    return lista.map((x) => fn(x));
}

function productoAlAzar(ventas) {
    if (ventas.length === 0) {
        return null;
    }

    const nombres = ventas.map((v) => v.producto);
    const unicos = nombres.filter((p, i) => nombres.indexOf(p) === i);
    const indice = Math.floor(Math.random() * unicos.length);

    return unicos[indice];
}

function reporteFinal(texto) {
    const ventas = limpiarRegistro(texto);

    if (ventas.length === 0) {
        console.log("No hay ventas válidas.");
        return;
    }

    const resumen = resumenPorProducto(ventas);
    const total = sumar(...resumen.map((r) => r.ingreso));
    const promo = productoAlAzar(ventas);

    console.log("REPORTE DE VENTAS DEL DÍA:");

    for (let i = 0; i < resumen.length; i++) {
        const r = resumen[i];
        console.log(r.producto + ": " + r.veces + " vendido(s) - $" + r.ingreso.toFixed(2));
    }

    console.log("Total del día: $" + total.toFixed(2));
    console.log("Producto en promoción: " + promo);
}

const registro = "Café: 35.50; té verde: 28 ;Pan Dulce:18.5; CAFÉ:35.5; galleta de avena: 22.10; Té Verde:28; Jugo de naranja: 40; pan dulce: 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5; Sándwich: 55.75 : galleta de avena:";

console.log("1. limpiarRegistro");
const ventasLimpias = limpiarRegistro(registro);
console.log(ventasLimpias);

console.log("2. sumar");
console.log(sumar(0.1, 0.2));
console.log(sumar(10, 20.456, 5));
console.log(sumar());

console.log("3. resumenPorProducto");
console.log(resumenPorProducto(ventasLimpias));

console.log(" 4. descuento y aplicarATodos");
console.log(descuento(200));
console.log(descuento(200, 25));
console.log(aplicarATodos([100, 50, 20], descuento));

console.log("5.productoAlAzar");
console.log(productoAlAzar(ventasLimpias));

console.log("6. Reporte final");
reporteFinal(registro);