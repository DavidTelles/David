function menorNumero(list) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }
    return menor;
}

let lista = [9, 3, 10, 2, 4, 10]

console.log(menorNumero(lista))