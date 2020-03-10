//henry ronaldo uicab rodriguez-programación lógica y funcional
var listaDatos =[1,2,3,4,5,6,7,8,9,10,11,12]
var primerAux
var segundoAux = true
var resultado
var iterador = 0
do {
    if(listaDatos[iterador]<listaDatos[iterador+1]) primerAux=true;
    else segundoAux=false;
    iterador++
} while(iterador<listaDatos.length-1)
resultado = primerAux && segundoAux
if(resultado) {
    console.log("LA LISTA DE NUMERO ESTA ORDENADA")
    console.log(resultado)
}else {
    console.log("LA LISTA DE NUMEROS NO SE ENCUENTRA ORDENADA")
    console.log(resultado)
}