function maiorPalavra(lista) {
    let maior = lista[0].length;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length > maior) {
            maior = lista[i]
        }
    }
    return maior;
}

let lista = ["dadasda", "fhajkfhakjfha", "akksaksdak", "kkkkk"]

console.log(maiorPalavra(lista))