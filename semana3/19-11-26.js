//Código I
//for: sé cuantas vueltas
/*for(let i =1 ; i<=3; i++) console.log("vuelta", i);
//while: depende de algo que va cambiando
while (monto< 2000) {monto *= 1.07; anios++;};*/

//Código II
/*let n = 17; //valor inicial
while (n<=117) {//condicion
    console.log("n vale " + n);
    n++;//avanza
}*/
//Código III
let numero = 27;
let pasos = 0;
while (numero !== 1) {
    numero = numero % 2 === 0
        ? numero/2
        : numero * 3 + 1;
    pasos++;
}
console.log(pasos);
let monto = 1000;
let anios = 0
while (monto< 2000) {monto *= 1.07; anios++;};
console.log(anios)

//A
let n = 1;
while (n<= 3) n++;
console.log(n); //Contador del 1 al 3

//B
function d() {
    let k = 10, v= 0;
    while (k<5) {v++, k++; }
    return console.log(v, k);    //No hace nada, la condición no se cumple
}
d();

//C
function r() {
    let r = 10, v= 0;
    do{v++; r++} while(r<5); //Primero realiza la acción, luego evalua la condición
    return console.log(v,r);

}
r();


//D
let t = 3;
while (t>0) { 
    console.log(t); t-- //decrementa hasta 0
}
console.log("fin"); // 3 2 1

//Código IV
let k = 10;
do{
    console.log("k vale " + k);
    //k vale 10
    k++;
} while(k<5); //Falso
// en el navegador: pedir hasta que sea válido
let edad;
do{
    edad = Number(prompt("Edad (1 a 120)"));
} while(Number.isNaN(edad) || edad <1  || edad>120);

//Código V
let a = 0, b = 0;
while (a > 5) a++; // El cuerpo no corre
do{b++; } while(b>5); //corre 1 vez
console.log(a, b) // 0 1

//Prácticas
function sumaDigitos(n) {
    n = Math.abs(n); // Funciona con negativos
    let suma = 0;
    while (n > 0) {
        suma += n % 10;
        n = Math.trunc(n / 10);
    }
    return suma;
}
console.log(sumaDigitos(1234)); // 10
function mcd(a, b) {
    let resto;
    if (a<0 || b < 0 ||!Number.isInteger(a) || !Number.isInteger(b)) {return console.error("Alguno o todos los datos introducidos son inválidos");}
    else{
    do{resto = a%b; if(resto>0){a = b; b = resto;};} while(resto !== 0)
    }
    if (resto === 0) {
        return console.log (b);
    }
}
mcd(48, 18);
mcd(7, 13);
mcd(1.87, 2);
mcd (-5, 3);

function aniosParaDuplicar(monto, tasa = 7) {
        // Validar: números mayores que cero (si no, el ciclo no terminaría nunca)
    if (typeof monto !== "number" || Number.isNaN(monto) || monto <= 0 ||
        typeof tasa !== "number" || Number.isNaN(tasa) || tasa <= 0) {
        console.log("Monto y tasa deben ser números mayores que cero");
        return null;
    }

    const meta = monto * 2;      // el doble del monto inicial
    let saldo = monto;
    let años = 0;

    // Cada vuelta es un año: el saldo crece tasa % sobre lo que ya tiene
    while (saldo < meta) {
        saldo = saldo * (1 + tasa / 100);
        años++;
    }

    return años;
}