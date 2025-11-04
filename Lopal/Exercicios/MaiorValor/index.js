function maiorValor(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }
    return maior;
}

let lista = [2345, 2345, 65, 2314, 6574, 1243, 6789, 12341234, 678788671234, 1243123, 10]

console.log(maiorValor(lista))