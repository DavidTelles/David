var prompt = require('prompt-sync')();

let meiosTrasporte = []
function verV() {
        let veiculos = Number(prompt(`
             ===== Trasportes Atlântida =====
             
             1 - Alugar Bicicleta
             2 - Alugar Bicicleta Elétrica
             3 - Alugar Patinete Elétrico
             4 - Alugar Skate

             0 - Voltar
             ================================
             `))

        if (veiculos == 1) {
            console.clear()
            let aB = Number(prompt(`
                ===== Trasportes Atlântida =====

                - Qual Bicicleta deseja?
                1 - Bicicleta 1
                2 - Bicicleta 2
                3 - Bicicleta 3
                4 - Bicicleta 4

                0 - Voltar
                ================================
                `))
            
            if (aB == 1) {
                meiosTrasporte.push("Bicicleta 1")
            } else if (aB == 2) {
                meiosTrasporte.push("Bicicleta 2")
            } else if (aB == 3) {
                meiosTrasporte.push("Bicicleta 3")
            } else if (aB == 4) {
                meiosTrasporte.push("Bicicleta 4")
            } else if (aB == 0) {
            } else {
                console.log("Inválido! Digite um número entre 0 e 4")
            }
        } else if (veiculos == 2) {
            console.clear()
            let aBE = Number(prompt(`
                ===== Trasportes Atlântida =====

                - Qual Bicicleta Elétrica deseja?
                1 - Bicicleta Elétrica 1
                2 - Bicicleta Elétrica 2
                3 - Bicicleta Elétrica 3
                4 - Bicicleta Elétrica 4

                0 - Voltar
                ================================
                `))
            
            if (aBE == 1) {
                meiosTrasporte.push("Bicicleta Elétrica 1")
            } else if (aBE == 2) {
                meiosTrasporte.push("Bicicleta Elétrica 2")
            } else if (aBE == 3) {
                meiosTrasporte.push("Bicicleta Elétrica 3")
            } else if (aBE == 4) {
                meiosTrasporte.push("Bicicleta Elétrica 4")
            } else if (aBE == 0) {
            } else {
                console.log("Inválido! Digite um número entre 0 e 4")
            }
        } else if (veiculos == 3) {
            console.clear()
            let aP = Number(prompt(`
                ===== Trasportes Atlântida =====

                - Qual Patinete deseja?
                1 - Patinete Elétrica 1
                2 - Patinete Elétrica 2
                3 - Patinete Elétrica 3
                4 - Patinete Elétrica 4

                0 - Voltar
                ================================
                `))
            
            if (aBE == 1) {
                meiosTrasporte.push("Patinete Elétrica 1")
            } else if (aP == 2) {
                meiosTrasporte.push("Patinete Elétrica 2")
            } else if (aP == 3) {
                meiosTrasporte.push("Patinete Elétrica 3")
            } else if (aP == 4) {
                meiosTrasporte.push("Patinete Elétrica 4")
            } else if (aP == 0) {
            } else {
                console.log("Inválido! Digite um número entre 0 e 4")
            }  
        } else if (veiculos == 4) {
            console.clear()
            let aBC = Number(prompt(`
                ===== Trasportes Atlântida =====

                - Qual Skate deseja?
                1 - Skate 1
                2 - Skate 2
                3 - Skate 3
                4 - Skate 4

                0 - Voltar
                ================================
                `))
            
            if (aBE == 1) {
                meiosTrasporte.push("Skate 1")
            } else if (aBE == 2) {
                meiosTrasporte.push("Skate 2")
            } else if (aBE == 3) {
                meiosTrasporte.push("Skate 3")
            } else if (aBE == 4) {
                meiosTrasporte.push("Skate 4")
            } else if (aBE == 0) {
            } else {
                console.log("Inválido! Digite um número entre 0 e 4")
            }
        } else {
            console.clear()
            console.log("Inválido! Digite um número entre 0 e 4")
        }
}


while(true) {
    let start = Number(prompt(`
        ===== Traspoortes Atlântida =====

        1 - Ver Veículos
        2 - Conversar com proprietário
        3 - Ver meios transportes alugados

        0 - Sair

        ================================
        `))

    if (start == 1) {
        console.clear()
        verV()
    } else if (start == 2) {
        console.clear()
    } else if (start == 3) {
        console.clear()
        console.log(meiosTrasporte)
        let question = Number(prompt(`
            ===== Traspoortes Atlântida =====

            Deseja remover algum meio de trasporte?

            1 - Sim
            2 - Não

            =================================
            `))

            if (question == 1) {
                    console.clear();
                    if (meiosTrasporte.length === 0) {
                        console.log("Não há anotações para apagar.");
                    } else {
                        console.log("Suas anotações:");
                        meiosTrasporte.forEach((nota, index) => {
                            console.log(`${index + 1}. ${nota}`);
                        });
    
                        let anotaIndex =
                            Number(
                                prompt(
                                    "Digite o número da anotação que deseja apagar - ",
                                ),
                            ) - 1;
    
                        if (anotaIndex >= 0 && anotaIndex < meiosTrasporte.length) {
                            let removed = meiosTrasporte.splice(anotaIndex, 1);
                            console.log("Anotação removida!");
                        } else {
                            console.log("Número inválido!");
                        }
                    }
                    prompt("Pressione Enter para continuar...");
                } else {
                console.log("Digite um número, 1 ou 2")
            }
    } else if (start == 0) {
        console.clear()
        console.log("Até mais!")
    } else if (start == 4) {
        console.clear()
    } else {
        console.clear()
        console.log("Inválido! Digite um número entre 0 e 3")
    }
} 