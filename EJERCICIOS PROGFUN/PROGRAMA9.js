//henry ronaldo uicab rodriguez-programación lógica y funcional
function funcRecursiva(INICIO) {
    if(INICIO == 1) return INICIO
    else return (2 + funcRecursiva(INICIO - 1))
}

for(var index = 1;index <= 20;index++) console.log(funcRecursiva(index))