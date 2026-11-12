//código I
function sinRetorno(x) {x*2;
}
function conRetorno(x) {return x*2;
}
function signo(n) {
    if (n<0) return "negativo" 
    if (n === 0) return "cero"; 
    return "positivo";
}
//sinRetorno(4) undefined conRetorno(4) 8 signo(-3), signo(0), signo(9) negativo cero positivo
// Código II
function estadisticas(lista) {
    const minimo = Math.min(...lista);
    const maximo = Math.max(...lista);
    const suma = lista.reduce((a, b) => a+b, 0);
    return { minimo, maximo, promedio: suma/lista.length };
}
const{ minimo, maximo, promedio} = estadisticas([4, 8, 6]);
console.log(minimo, maximo, promedio);
//4 8 6
//Código III
//Calcula (pura)
const conIva = (p) => Math.round(p*116) / 100;
//Muestra (efecto)
console.log("total", conIva(100));
// total 116

//Trampa: salto de línea tras return
function mal() {
    return
    42;
}
// mal() undefined

//Prácticas
function esPrimo(n) {
if (n<=1 || !n) {
    return false;
}
else{
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        return false;
    }
    
}
}
return true;
}
console.log(esPrimo(7));//true
console.log(esPrimo(1));//false
console.log(esPrimo(37));//true
console.log(esPrimo(139)); //true
console.log(esPrimo(28)); //false
console.log(esPrimo(-3)); //false
console.log(esPrimo()); //false

function convertirTemperatura(v, de, a) {
    let celsius;
    switch (de) {
        case "C":
            celsius = v;
            break;
        case "F":
             celsius = (v - 32) * (5 / 9);
            break;
        case "K":
             celsius = v - 273.15;
            break;
        default:
            console.log("No se ha especificado el tipo de temperatura, por lo tanto el programa no se puede ejecutar correctamente");
            break;
    }
    switch (a) {
        case "C":
            return celsius;
        case "F":
            return celsius * (9 / 5) + 32;
        case "K":
            return celsius + 273.15;
        default:
            console.log("No se ha especificado el cambio de temperatura, por lo tanto el programa no se puede ejecutar correctamente");
            break;
    }
    return Numeros;
}
console.log(convertirTemperatura(120, "F", "K"));
console.log(convertirTemperatura(200, "C", "F"));
console.log(convertirTemperatura(0, "C", "K"));
