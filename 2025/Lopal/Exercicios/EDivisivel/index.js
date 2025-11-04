const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um número -> "))

if (num % 3 == 0) {
    console.log(`O número ${num} é divisivel por 3`)
} else {
    console.log(`O número ${num}, não é divisivel por 3`)
}