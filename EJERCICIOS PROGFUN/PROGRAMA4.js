//henry ronaldo uicab rodriguez-programación lógica y funcional

var numeros = [6,10,5,3], aux = numeros[0]
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
}
console.log("El NUMERO "+aux+" ES EL MAYOR DEL CONJUNTO")