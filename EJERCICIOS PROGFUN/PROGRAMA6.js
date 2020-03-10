//henry ronaldo uicab rodriguez-programación lógica y funcional

var numero = 7
var lista = [1,2,3,4,5,6,7,8,9]

function DETERMINACION(numero){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == numero){
            return true;
        }
    }
}

if(DETERMINACION(numero)){
    console.log("EL NUMERO "+numero+" SE ENCUENTRA DENTRO")
    console.log(true)
}else{
    console.log("EL NUMERO "+numero+" NO SE ENCUENTRA DENTRO")
    console.log(false)
}