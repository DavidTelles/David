function menorNum(lista) {
    let menor = lista[0]
    for(let i = 1; i < lista.length; i++) {
        if(menor > lista[i]) {
            menor = lista[i]
        }
    }
    return menor
}
let num = [4, 10, 30, 22, 14, 20, 1]

console.log(menorNum(num))