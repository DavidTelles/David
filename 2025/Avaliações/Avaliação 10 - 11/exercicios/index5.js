function media(lista) {
    let soma = lista[0]
    for(let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }

    let resultado = soma/lista.length + 1

    return resultado
}

console.log(media([5, 7, 10, 12]))