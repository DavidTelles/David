var prompt = require('prompt-sync')();

var frase = prompt("Digite uma palavra -> ")
let a = 0

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        a++
    }
}

console.log(`A letra 'a' aparece ${a} vezes na frase`)