const prompt = require('prompt-sync')();

var cash = 0
var i = 0
var list = []
var user = prompt(`Your user -> `);
function singUp() {
    while(true) {
    var password = prompt(`Your password -> `);
    var confirm = prompt(`Confirm your password -> `);

    if(password === confirm) {
        console.clear();
        console.log("Entering...");
        sing = true;
        break;
    } else {
        console.clear();
        console.log("incorrect password");
    }
}
}
singUp()

function main() {
     let first = Number(prompt(`
        =====================
        Hellow ${user}! Your cash is: ${cash}

        1 - Rent a vehicle
        2 - View vehicle of vehicles
        3 - Add cash
        4 - cash withdrawal 
        0 - Exit
        `))  
        
        if (first == 1) {
            rent()
        } else if(first == 2) {
            vehicle()
        } else if (first == 3) {
            deposit()
        } else if (first == 4) {
            withdrawal()
        } else if (first == 0) {
            i++
        }

}

function rent() {
    let first = Number(prompt(`
        =====================
        Hellow ${user}! Your cash is: ${cash}

        1 - Bicicles
        2 - Scooters
        `))  
        
        if (first == 1) {
            rentBike()
        } else if(first == 2) {
            rentScoo()
        }

}

function rentBike() {
    console.log(`
        The models bike is:
        1 - Simple bike - 20/h
        2 - Advanced bike - 35/h
        3 - Professional bike - 40/h

        `)
    let bike = Number(prompt('Add the bike model: '))
    let time = Number(prompt('Add the bike time in hours: '))
    let value = 0
    if (bike == 1) {
        value = 20
    } else if(bike == 2) {
        value = 35
    } else if(bike = 3) {
        value = 40
    }
    if (cash >= (value*time)){
        cash = cash - (value*time)
        if (bike == 1) {
            list.push('Simple bike')
        } else if(bike == 2) {
            list.push('Advanced bike')
        } else if(bike = 3) {
            list.push('Professional bike')
        }
        console.log(`Your bike was successfully rented. The amount was... ${(value*time)}`)
    } else if (cash < (value*time)) {
        console.log("Insufficient cash")
        deposit()
    }
}

function rentScoo() {
    console.log(`
        The models bike is:
        1 - Simple Scooter - 5/h
        2 - Advanced Scooter - 15/h
        3 - Professional Scooter - 20/h

        `)
    let scooter = Number(prompt('Add the Scooter model: '))
    let time = Number(prompt('Add the Scooter time in hours: '))
    let value = 0
    if (scooter == 1) {
        value = 5
    } else if(scooter == 2) {
        value = 15
    } else if(scooter = 3) {
        value = 20
    }
    if (cash >= (value*time)){
        cash = cash - (value*time)
        if (scooter == 1) {
            list.push('Simple Scooter')
        } else if(scooter == 2) {
            list.push('Advanced Scooter')
        } else if (scooter = 3) {
            list.push('Professional Scooter')
        }
        console.log(`Your Scooter was successfully rented. The amount was... ${(value*time)}`)
    } else if (cash < (value*time)) {
        console.log("Insufficient cash")
        deposit()
    }
}

function vehicle() {
    console.log(list)
    let remove = Number(prompt('Do you wish to remove any vehicle? 1 - Yes, 2 - No: '))
    if (remove == 1) {
        console.clear()
        console.log(list)
        let i = Number(prompt('State the vehicle position: '))
        list.splice(i - 1, 1);
        console.log('vehicle removed')
    } else if (remove == 2) {
        console.log('Ok...')
    }
}

function deposit() {
    console.log('Add the amount you wish to add to the account.')
    let value = Number(prompt('Add value: '))    
    cash = cash + value
    console.log(`Cash update: ${cash}`)
}

function withdrawal() {
    console.log('Add the amount you wish to withdraw from the account.')
    let value = Number(prompt('Say value: '))    
    if (cash >= value) {
        cash = cash - value
        console.log(`Cash update... ${cash}`)
    } else {
        console.log('Withdrawal was not possible; account cash is less than the withdrawal amount.')
    }
}

while(i < 1) {
main()
}