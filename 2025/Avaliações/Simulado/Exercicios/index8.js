function menorPalavra(lista){
    let menor = lista[0].length
    for (let contador = 1; contador < lista.length; contador++){
        if (lista[contador].length < menor){
            menor = lista[contador]
        }
    }

    return menor
        
}

let nomes = ["China", 'Caio', 'David', 'Arthur', 'Luis Gustavo']

console.log(menorPalavra(nomes))