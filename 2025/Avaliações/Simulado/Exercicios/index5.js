let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let soma = 0
let par = 0

for(let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 == 0) {
        soma += lista[i]
        par++
    }
}

console.log(soma/par)