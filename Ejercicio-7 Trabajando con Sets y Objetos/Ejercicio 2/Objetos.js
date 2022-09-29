const datosPersonales = {
    nombre: 'Diego' ,
    apellido: 'Laura',
    edad:22,
    altura: 169,
    eresDesarrollador : true
}

const edad_1 = "edad"
console.log(datosPersonales[edad_1])

const lista =[
    {
        nombre: 'Diego' ,
        apellido: 'Laura',
        edad:22,
        altura: 169,
        eresDesarrollador : true
    },
    {
        nombre: 'juan' ,
        apellido: 'bendezu',
        edad:24,
        altura: 172,
        eresDesarrollador : false
    },
    {
        nombre: 'frank' ,
        apellido: 'poma',
        edad:20,
        altura: 165,
        eresDesarrollador : false
    }
]

const lista_mayor = lista.sort((a, b) => (b.edad - a.edad))
console.log(lista_mayor)