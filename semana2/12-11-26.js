//Dados y azar
function lanzarDado() {
    return Math.floor(Math.random()*6);
}
function lanzarVarios(ndados) {
    let dados = [];
    for (let i = 0; i < ndados; i++) {
         dados[i] = Math.floor(Math.random()*6)+1;
    }
    return dados;
    
}
function esDoble(...dobles) {
    let TF = true;
    if (dobles.length === 2 && dobles[0] === dobles[1]) {
        TF = true;
    }
    else{
        TF = false;
    }
    return TF;
}
console.log(lanzarDado(2));
console.log(lanzarVarios(7));
console.log(esDoble(4, 4));