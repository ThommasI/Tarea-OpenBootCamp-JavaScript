let factorizacion = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let i= 0;
let multiplicacion= 1;

while(i <factorizacion.length){
    if(i > 9){
        break;
    }
    multiplicacion = factorizacion[i] * multiplicacion;
    i++
}

console.log(multiplicacion);

