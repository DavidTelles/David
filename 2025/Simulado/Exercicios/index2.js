var prompt = require('prompt-sync')();

const palavra = prompt("Digite uma palavra -> ")
console.log(`A palavra em maiúscula é ${palavra.toUpperCase()}`)