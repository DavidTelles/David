const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra -> ")
let a = palavra.length - 1
let resposta = ""

for(let i = 0; i < palavra.length; i++){
    resposta += palavra[a]
    a--
}

console.log(resposta)
