//Sin función: La fórmula copiada tres veces
const a = 100* 1.16, b = 250 * 1.16, c = 80*1.16;
//Con función: el IVA vive en un solo lugar
const conIva= (precio) => precio * 1.16;
//1. Declaración
function saludar(nombre) {
    return "Hola, " + nombre;
};
//2. Expresión, guardada en una variable
const saludar2 = function (nombre) {
    return "Hola, " + nombre;
};
//3. Función flecha
const saludar3 = (nombre) => "Hola, " + nombre;
saludar("Ana") //Hola, Ana

function area(base, altura) {
    return base*altura/2;
}
console.log(area(10, 4)); //20

//Código II
const doble = (x) => x*2;
const suma = (a,b) => a+b;
const saludo = () => "hola";
const info = (n) => {
const m = n*2;
return 'El doble de ${n} es ${m}'};
const crear = (n) => ({valor: n});
console.log(doble(4), suma(2,3), saludo());
//8 5 hola
console.log(info(5), crear(7));
//El doble de 5 es 10 {valor: 7 }
//Código III
//declaración: funciona
console.log(cuadrado(5));
function cuadrado(n) {return n*n;

};//25
//Flecha en const: error
/*console.log(cubo(2));
const cubo = (n) => n**3;
//ReferenceError
*/
//Código IV
function potencia(base, exp= 2) {
    return base*exp;
}
console.log(potencia(5), potencia(2, 10));
//25 1024
function sumarTodos(...numeros) {
    return numeros.reduce((a, b) => a+ b, 0);
}
console.log(sumarTodos(1, 2, 3, 4), sumarTodos());
//10, 0

//Código V
function aplicar(valor, fn) {
    return fn(valor);
    
}
console.log(aplicar(5, (x) => x + 2), aplicar(5, (x) => x*2));

//7 10
function multiplicadoPor(n) {
    return (x) => x * n;
}
const triple = multiplicadoPor(3);
console.log(triple(7));
//21

//Prácticas

function descuento( precio, porcentaje = 10) {

    return (precio - (precio*(porcentaje/100)));
    
}
console.log(descuento(200));
console.log(descuento(200, 25));

function promedio(...notas) {
    if (!notas.length) {
        return 0;
    }
    else{
    return notas.reduce((acum, p) => acum + p,0)/notas.length
    }
}

console.log(promedio(8,9,10));
console.log(promedio());

function aplicarDosVeces(fn, x) {
    return fn(fn(x));
}
console.log(aplicarDosVeces((n)=> n+2, 5));
