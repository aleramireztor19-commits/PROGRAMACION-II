let i = 0;
const impares= [];
while (true) {
    i++;
    if (i>10) break; //sale
    if(i%2 === 0) continue; //salta
    impares.push(i);
}
console.log(impares);
// [1, 3, 5, 7, 9]

//Código II
let x = 0;
for(let i= 0; 1>10; i++) x+= 0.1;
console.log(x, x === 1); // 0.999999999 false
//Prácticas
function pedirNumero() { //Introduzca numero 1 al 10, usuario contesta mal, buscar dentro de respuestas que dio el usuario que respuestas si estan en un rango de 1 al 10
    let respuestas;
    let arr = [];
    do{respuestas = parseInt(prompt("Deme un numero entre el 1 y el 10")); arr.push(respuestas);} while(respuestas < 1 || respuestas > 10 || isNaN(respuestas)); 
    arr = arr.filter((x) => x>0 && x<11);
    return alert(arr);
}
pedirNumero();
function adivinar(secreto) {
    let bajo = 1;
    let alto = 500;
    let intentos = 0;
    let intento = 0;
    while (intento !== secreto) {
        intento = Math.floor((bajo + alto)/2);
        intentos++;

        if (intento < secreto) {
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`),
            bajo = intento+1;
        }
          else if (intento > secreto) {
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`),
            alto = intento-1;
        }
        else{
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`)
        }
    }
    /*let valor = Math.random(Math.floor() * 100), intento = 0;
    for (let i = 1; i < 100; i++) {
        intento++;
        if (i === secreto) {
            alert("La cantidad de intentos para encontrar su número secreto fueron: " + intento);
        }
        
    }
    while (valor !== secreto) {
        
    }    */
   return intentos;
}
console.log("intentos:", adivinar(126));
//Código III
function nombreDia(numero) {
    switch (numero) {
        case 1:
        return "lunes";
        
        case 2:
        return "martes";

        case 3:
        return "miercoles";
            
    
        case 4:
            return "jueves";
            
        case 5:
            return "inicio de fin de semana";
            
        case 6:
            return "fin de semana";
            
        case 7:
            return "fin de semana";
            
    
        default:
            return "inexistente"
    }
}
//Código IV
function ruidoAnimal(animal) {
    animal.toLowerCase();
    switch (animal) {
        case "perro":
            console.log("guau");
        case "gato":
            console.log("miau");
        break;
        case "fiera":
            console.log("Con quién te mensajeas?")
        break;
        case "leon":
            console.log("rawr")
            break;
        default:
            console.log("???");
        break;
}
}
ruidoAnimal("perro");
ruidoAnimal("gato");
ruidoAnimal("pez");
ruidoAnimal("fiera");
ruidoAnimal("leon");