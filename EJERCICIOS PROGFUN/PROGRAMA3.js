//henry ronaldo uicab rodriguez-programación lógica y funcional
var Inicio = 3600
function CalculoHoras(Inicio) {
    return Math.floor(Inicio/3600)
}
function CalculoMinutos(Inicio) {
    return Math.floor((Inicio%3600)/60)
}
function CalculoSegundos(Inicio) {
    return (Inicio%60)
}
console.log("El valor inicial fue: "+Inicio)
console.log("Numero de Horas: "+CalculoHoras(Inicio))
console.log("Numero de Minutos: "+CalculoMinutos(Inicio))
console.log("Numero de Segundos: "+CalculoSegundos(Inicio))