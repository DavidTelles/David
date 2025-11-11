function maiorString(lista) {
    let maior = lista[0].length
    for(let i = 0; i < lista.length; i++) {
        if(maior < lista[i].length) {
            maior = lista[i]
        }
    }
    return maior
}

console.log(maiorString(["djkdja", "ajjaja", "aaaaaaaaaaaaaaaaaaaaaaaaaa", "jajajaj", "a", "parelelepipedo", "labubu"]))