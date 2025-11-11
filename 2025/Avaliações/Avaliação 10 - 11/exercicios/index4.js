const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra -> ")
let vogais = 0

for(let i = 0; i < palavra.length; i++) {
    if(palavra[i].toLowerCase() == 'a' || palavra[i].toLowerCase() == 'e' || palavra[i].toLowerCase() == 'i' || palavra[i].toLowerCase() == 'o' || palavra[i].toLowerCase() == 'u') {
        vogais++
    }
}

console.log(`${vogais} Vogais!`)