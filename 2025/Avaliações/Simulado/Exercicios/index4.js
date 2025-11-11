var prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra -> ")
let a = 0
for (let i = 0; i < palavra.length; i++){
    if(palavra[i] == 'a') {
        a += 1
    }
}

console.log(`A palavra ${palavra} tem ${a} 'a'`)