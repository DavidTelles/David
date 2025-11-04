var prompt = require('prompt-sync')();

var num = Number(prompt('Digite um número -> '));
if (num % 5 == 0) {
    console.log('O número é divisível por 5')
} else {
    console.log("O número não é divisível por 5")
}