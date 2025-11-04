function soma(lista) {
    let soma = 0
    for(let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            soma += lista[i]
        }
    }
    return soma
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(soma(lista))