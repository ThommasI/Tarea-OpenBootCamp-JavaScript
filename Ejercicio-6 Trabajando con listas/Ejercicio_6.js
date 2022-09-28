const lista = ["leche" , "pan" , "azucar" , " yogurt" , "arroz"];

console.log(lista)

lista.push("Aceite de Girasol")
console.log(lista)

const peliculas = [
    {titulo : "DJANGO sin cadenas",director :"Quentin Tarantino" , fecha : 2012 },
    {titulo : "Bastardos sin gloria" ,director : "Quentin Tarantino" , fecha : 2009},
    {titulo : "Once Upon a Time in Hollywood" ,director : "Quentin Tarantino" , fecha : 2019}
]

const peliculasMayores = peliculas.filter(mayor => (mayor.fecha > 2010))
console.log(peliculasMayores);

const directores =["Quentin Tarantino","Quentin Tarantino","Segio Leone"]

const verdaderosDirectores = directores.map(( valor, indice ) => 
        (`El verdadero director de la pelicula ${indice +1}  es ${valor} `))
console.log(verdaderosDirectores)

const nombrePeliculasOriginales = ["Django unchained" , "Inglorious Basterds", "Once upon a Time in Hollywood"]
const originales = nombrePeliculasOriginales.map((peli , i) => (`Nombre original de la pelicula ${i +1} es ${peli}`))
console.log(originales)

const directores1 =["Quentin Tarantino","Quentin Tarantino","Quentin Tarantino"]
const nombrePeliculas = ["Django sin cadenas" , "bastardos sin Gloria", "Once upon a Time in Hollywood"]
const concatenacion = directores1.concat(nombrePeliculas) ;

console.log(concatenacion)

const propagacion = [...directores1 , ...nombrePeliculas]
console.log(propagacion)
