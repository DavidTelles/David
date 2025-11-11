const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número -> "))

if(num % 3 == 0 || num % 5 == 0) {
    console.log("O número é divisivel por 3 ou 5")
} else {
    console.log("O número não é divisivel por 3 ou por 5")
}
