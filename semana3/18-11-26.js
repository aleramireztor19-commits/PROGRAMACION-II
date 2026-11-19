/*function sinRetorno(x) {x*2;}
function conRetorno(x) {return x*2;}
function signo(n) {
    if (n < 0) return "negativo";
    if (n === 0) return "cero";
    return "positivo";
}
// sinRetorno(4) / undefined conRetorno(4) /8 signo(-3), signo(0), signo(9) / negativo cero positivo
//Código II

function contador() {let n= 0; n++; return n;}
console.log(contador(), contador(), contador());
// 1 1 1 => (n se crea de nuevo en cada llamada)

//Código III  Mejorar código y describir con un comentario que hace
let a = 5;
function cambiar(x) {return x = 99;}
console.log(cambiar(a));
function agregar(arr) { arr.push(99); }
const lista = [1, 2];
agregar(lista);
//Lista ahora es [1, 2, 99]
//Mejor: devolver una copia
const agregar2 = (arr) => [...arr, 99];

//Código IV
const global = "visible en todas partes";
function probar() {
    const local = "solo aquí dentro";
    console.log(global, local);
}
probar();
// !console.log(local);
//ReferenceError: local is not defined
//Usa const por defecto, let si necesitas reasignar y var NUNCA

//Código V

//Sombreado
const nombre = "global";
function f() {
    const nombre = "local";
    console.log(nombre);
}
f(); /*local global*/ /*console.log(nombre)*//*Global accidental*/
/*function g() {resultado = 42;}
g(); console.log(typeof resultado); /*number (con "use strict": ReferenceError)*/
"use strict";
//Revisión y predicción de códigos
//A
/*
let x= 1;
function f() {
    let x = 2; return x;
}
console.log(f(), x);
//Imprimira el valor de x como 2 en la función y 1 en la otra, un let no se puede redefinir.
//B
function g() {
    total = 5;
}
console.log(g()); // esto imprimira undefined, ya que la función no regresa ningun tipo de valor y asigna un valor inexistente a una variable no declarada
console.log(total); //Esto tambien imprime error, la asignación a total además de tener un alcance de bloque, no esta correctamente definido con const. / Resulto ser equivocado, imprime el valor del total que es 5
//En el caso de usar "use strict" imprime ReferenceError, por que total nunca fue definido correctamente.
*/
//C
const fs = [];
for (let i = 0; i<3; i++) //cuenta del 0 al 2
fs.push(() => i*10); // multiplica por 10 el valor actual de i en el for
console.log(fs.map((f) => f())); //


// D
function crear() {
    let n = 10;
    return () => ++n; //Aumento en 1 de el valor de la variable
}
const a = crear(), b = crear(); // Se definen dos constantes con el valor que retorna la función
console.log(a(), a(), b()); // Se corre 2 veces la const a() por lo que se imprimira: 11 12; y la constante b() solo una vez, por lo que el valor original que retorna la función se imprimira 11


//Código VI
function crearContador() {
    let cuenta = 0;
    return () => {cuenta++; return cuenta; };
}
const c1 = crearContador();
const c2 = crearContador();
//1 2 3 1
//Cuenta no es accesible desde fuera:
//Solo se cambia mediante c1() o c2()

//Código VII
//Con var
const fa = [];
for (var i = 0; i < 3; i++);
console.log(fa.map((f) => f()))
// [3, 3, 3]

//Con let
const fb = [];
for (let j = 0; j < 3; j++) fb.push(() => j);
console.log(fb.map((f) => f()));
// [0, 1, 2]

//Prácticas
/*saldoFinal es privado: vive dentro de crearCuentaBancaria y solo se puede
leer o cambiar con los métodos del objeto que devuelve.*/
function crearCuentaBancaria(saldo) {
    let saldoFinal = saldo;
    //Dentro del return regreso según el caso, multiples funciones, como la de depositar, retirar y consultar, todas estas funciones se encuentran dentro de la función original, funcionan como fuciones anidadas a la original, que después puedo mandar a llamar con mi constante "c"
    return {
        // Suma la cantidad al saldo (solo si es un número mayor que cero)
        depositar: function (can) {
            if (typeof can !== "number" || Number.isNaN(can) || can <= 0) {
                console.log("Cantidad inválida");
                return saldoFinal;
            }
            saldoFinal = saldoFinal + can;
            return saldoFinal;
        },

        // Resta la cantidad; si excede el saldo avisa y NO cambia nada
        retirar: function (can) {
            if (typeof can !== "number" || Number.isNaN(can) || can <= 0) {
                console.log("Cantidad inválida");
                return saldoFinal;
            }
            if (can > saldoFinal) {
                console.log("Fondos insuficientes");
                return saldoFinal;
            }
            saldoFinal = saldoFinal - can;
            return saldoFinal;
        },

        // Solo regresa el saldo, no lo modifica
        consultar: function () {
            return saldoFinal;
        }
    };
}
const c = crearCuentaBancaria(100);
c.depositar(50);
c.retirar(30);
c.retirar(500);                  // Fondos insuficientes
console.log(c.consultar());      // 120
console.log(c.saldo);            // undefined (sin paréntesis: es propiedad, no método)
const Jaime = crearCuentaBancaria(170);
console.log(Jaime.retirar(80), Jaime.consultar(), Jaime.depositar(75)); // 90 90 165
console.log(c.consultar(), Jaime.consultar()); // 120 165
// Mensajes de error
c.depositar(-10);                // Cantidad inválida
c.retirar("abc");                // Cantidad inválida
console.log(c.consultar());      // 120 (sin cambios)