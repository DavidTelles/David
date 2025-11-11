function maiorValor(lista) {
    let maior = lista[0]
    for(let i = 0; i < lista.length; i++) {
        if(maior < lista[i]) {
            maior = lista[i]
        }
    }
    return maior
}

console.log(maiorValor([3, 6, 2, 70, 1, 10, 9]))