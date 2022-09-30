const logger= require('./Logger');

logger.error("Esto es un error")


const miError = val =>{
    if(typeof val === "number"){
        return "No hay error"
    }
    throw new Error("Este es un error")
}

const posible= "24"


try{
    const intentando= miError(posible)
    console.log(intentando)
} catch(e){
    console.error(`Este mensaje es por un error,  ${e}`)
    console.error('ERROR!!')
}
finally{
    console.log('Este es un mensaje que saldra cuando ya termino el intento por encontrar el error')
}