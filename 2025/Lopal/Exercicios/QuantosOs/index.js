const prompt = require('prompt-sync')();

let frase = prompt("Digite uma palavra -> ")
let o = 0

for (let i = 0; i <= frase.length; i++) {
    if (frase[i]?.toLowerCase() === 'o') {
        o++
    }
}

console.log(`A palavra ${frase} tem ${o} "o"!`)