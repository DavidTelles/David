function menorPalavra(list) {
    let menor = list[0].length;
    for (let i = 1; i < list.length; i++) {
        if (list[i].length < menor) {
            menor = list[i]
        }
    }
    return menor;
}

let nomes = ["China", 'Caio', 'David', 'Arthur', 'Luis Gustavo']

console.log(menorPalavra(nomes))