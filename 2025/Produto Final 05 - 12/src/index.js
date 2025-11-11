const prompt = require('prompt-sync')();

var cash = 0;
var i = 0;
var list = [];
var user = prompt(`Seu Usuário -> `);

function singUp() {
    while(true) {
    var password = prompt(`Sua Senha -> `);
    var confirm = prompt(`Confirme sua senha -> `);

    if(password === confirm) {
        console.clear();
        console.log("Entrando...");
        break;
    } else {
        console.clear();
        console.log("Senha incorreta!");
    }
}
}
singUp()

function main() {
     let first = Number(prompt(`
        =====================
        Olá ${user}! Seu cash é: ${cash}

        1 - Alugar veiculo
        2 - Ver veiculos alugados
        3 - Adicionar cash
        4 - Retirar cash 

        0 - Sair
        `)); 
        
        if (first == 1) {
            rent();
        } else if(first == 2) {
            vehicle();
        } else if (first == 3) {
            deposit();
        } else if (first == 4) {
            withdrawal();
        } else if (first == 0) {
            i++
        };

}

function rent() {
    let first = Number(prompt(`
        =====================
        Ola ${user}! Seu cash é: ${cash}

        1 - Bicicletas
        2 - Patinetes

        0 - Voltar
        `))  
        
        if (first == 1) {
            rentBike()
        } else if(first == 2) {
            rentScoo();
        } else if (first == 0) {
            main();
        };

}

function rentBike() {
    console.log(`
        Os Modelos de Bikes são:
        1 - Simple bike - 20/h
        2 - Advanced bike - 35/h
        3 - Professional bike - 40/h

        0 - Voltar

        `);
    let bike = Number(prompt('Adicione o modelo da bike: '));
    let time = Number(prompt('Adicione quanto tempo deseja: '));
    let value = 0;
    if (bike == 1) {
        value = 20;
    } else if(bike == 2) {
        value = 35;
    } else if(bike == 3) {
        value = 40;
    } else if (bike == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (bike == 1) {
            list.push('Simple bike');
        } else if(bike == 2) {
            list.push('Advanced bike');
        } else if(bike == 3) {
            list.push('Professional bike');
        };
        console.log(`Sua bike foi alugada com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Saldo insuficiente");
        deposit();
    };
}

function rentScoo() {
    console.log(`
        Os modelos de patinete são:
        1 - Patinete simples - 5/h
        2 - Patinete avançado - 15/h
        3 - Patinete profissional - 20/h

        0 - Voltar

        `);
    let scooter = Number(prompt('Adicione o modelo do patinete: '));
    let time = Number(prompt('Adicione o tempo que deseja: '));
    let value = 0;
    if (scooter == 1) {
        value = 5;
    } else if(scooter == 2) {
        value = 15;
    } else if(scooter == 3) {
        value = 20;
    } else if (scooter == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (scooter == 1) {
            list.push('Patinete simples');
        } else if(scooter == 2) {
            list.push('Patinete avançado');
        } else if (scooter = 3) {
            list.push('Patinete profissional');
        };
        console.log(`Seu patinete foi alugado com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Insufficient cash");
        deposit();
    }
}

function vehicle() {
    console.log(list)
    let remove = prompt('Você deseja remover algum veiculo? s/n: ');
    if (remove.toLowerCase() == 's') {
        console.clear();
        console.log(list);
        let i = Number(prompt('Diga a posição do veiculo: '));
        list.splice(i - 1, 1);
        console.log('Veiculo removido');
    } else if (remove.toLowerCase() == 'n') {
        console.log('Ok...');
    };
}

function deposit() {
    console.log('Adicione o valor que deseja adicionar na sua conta.');
    let value = Number(prompt('Adicione valor: '));
    cash = cash + value;
    console.log(`Cash atualizado: ${cash}`);
};

function withdrawal() {
    console.log('Adicione o valor que deseja remover da sua conta.');
    let value = Number(prompt('Diga o valor: '))    ;
    if (cash >= value) {
        cash = cash - value;
        console.log(`Cash atualizado... ${cash}`);
    } else {
        console.log('A retirada não foi possivel; O cash é menor do que o valor que deseja retirar.');
    };
}

while(i < 1) {
main()
}