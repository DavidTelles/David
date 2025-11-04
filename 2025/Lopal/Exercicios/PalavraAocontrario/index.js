const prompt = require('prompt-sync')();

const palavra = prompt("Digite qualquer palavra -> ") // Gato

let resultado = ""; // String vazía

for (let i = palavra.length - 1; i >= 0; i = i - 1) {
        resultado = resultado + palavra[i]
}

console.log(resultado) // Printa a palavra Aocontrário
