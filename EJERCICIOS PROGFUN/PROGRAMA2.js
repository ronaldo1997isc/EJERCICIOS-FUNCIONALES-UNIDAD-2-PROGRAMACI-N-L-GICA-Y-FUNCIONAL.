//henry ronaldo uicab rodriguez-programación lógica y funcional
var n = 9
var rangoI = 1
var rangoF = 10
for (let index = rangoI; index <= rangoF; index++) {
    if(n==index){
        console.log("el numero "+n+" se encuentra dentro del rango")
        break;
    }
    if(n!=index && index==rangoF) console.log("el numero "+n+" NO se encuentra dentro del rango")
}