//henry ronaldo uicab rodriguez-programación lógica y funcional
var LISTADATOS = [2,4,6,2,4,7,10,20,35]
var DATOSPARES = []
var iterador = 0

function determinarPares(entrada) {
    if (entrada == 0) return true
    else return determinarImpares(entrada - 1)
}

function determinarImpares(entrada) {
    if (entrada == 0) return false
    else return determinarPares(entrada - 1)
}

for(var index = 0;index < LISTADATOS.length;index++) {
    if(determinarPares(LISTADATOS[index])==true) DATOSPARES[index] = listaRecibida[index]
}

do {
    if(DATOSPARES[iterador] == undefined) DATOSPARES.splice(iterador,1)
    console.log(DATOSPARES[iterador])
    iterador++
} while(iterador<DATOSPARES.length)