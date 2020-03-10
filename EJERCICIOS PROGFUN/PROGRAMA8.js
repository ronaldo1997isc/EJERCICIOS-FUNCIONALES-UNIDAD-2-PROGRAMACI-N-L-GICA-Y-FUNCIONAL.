//henry ronaldo uicab rodriguez-programación lógica y funcional

var Datos1 = [1,2,3,4,5,6,7,8,9,10]
var Datos2 = [1,2,3,4,5,6,7,8,9,10]
var resultado
var primerAux
var segundoAux = true
var iterador = 0
do {
if (Datos1[iterador] == Datos2[iterador]) primerAux = true
else segundoAux = false
iterador++
} while(iterador < Datos1.length || iterador < Datos2.length)
resultado = primerAux && segundoAux
if(resultado) {
    console.log(" LAS LISTAS SON IGUALES")
    console.log(resultado)
}else {
    console.log("LAS LISTAS NO SON IGUALES FAVOR DE VERIFICAR")
    console.log(resultado)
}