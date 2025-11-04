let lista = [3, 6, 10, 8, 7]
let soma = 0

for (let i = 0; i < lista.length; i++) {
    soma += lista[i]
}

let media = soma / lista.length

console.log(`A lista é ${lista}, e a média é ${media}`)