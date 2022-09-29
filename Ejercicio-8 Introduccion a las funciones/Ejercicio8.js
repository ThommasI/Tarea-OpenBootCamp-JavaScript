function verdadero(){
    return true
}

console.log(verdadero());
console.log(verdadero());

const miPromesa = new Promise((resolve , reject) =>{
    setTimeout( function(){
        if(true){
            resolve()
        }else{
            reject()
        }
    }, 5000);
})

miPromesa
   
.then(() => console.log("Hola soy una promesa"))
.catch(() => console.log("Error"))   
.finally(() => console.log("Yo tambien me ejecuto "))


function* generarId(){
    let id = 0
    while(true){
        id= id +2
        yield id
        if( id === 20){
            return
        }
    }
}

const gen= generarId() ;

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

