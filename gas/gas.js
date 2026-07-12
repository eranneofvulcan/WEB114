// Eranne Lenz 7/10/2026

// GLOBAL VARIABLES
let entryCount = 0;  
let gasTotal = 0;     

// MAIN PROGRAM

let username = prompt("Enter your name:");

if (username === null) {
    alert("You cancelled the name prompt.");
} else if (username.trim() === "") {
    alert("You must type a name.");
} else {
    let average = calcGasAvg();

    if (average === null) {
        alert("You cancelled entering gas totals.");
    } else {
        let message;
        if (entryCount === 0) {
            message = "No gas totals were entered.";
        } else if (entryCount === 1) {
            message = username + "'s gas total is $" + average.toFixed(2) + ".";
        } else {
            message = username + "'s average weekly gas bill is $" + average.toFixed(2) + ".";
        }
        alert(message);

        let entryMessage;
        if (entryCount === 0) {
            entryMessage = "No gas totals were entered.";
        } else if (entryCount === 1) {
            entryMessage = "You entered 1 gas total.";
        } else {
            entryMessage = "You entered " + entryCount + " gas totals.";
        }
        alert(entryMessage);
    }
}
// FUNCTION: calcGasAvg()
function calcGasAvg() {

    let input = prompt("Enter your first week's gas total. Enter -1 when you are done.");

    if (input === null) {
        return null;
    }

    let weeklyGas = parseFloat(input);

    while (weeklyGas !== -1) {

        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");

            input = prompt("Enter your first week's gas total. Enter -1 when you are done.");

            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
            continue; 
        } else {
            gasTotal += weeklyGas;
            entryCount++;

            input = prompt("Enter your next week's gas total. Enter -1 when you are done.");

            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
        }
    }

    let average;
    if (entryCount > 0) {
        average = gasTotal / entryCount;
    } else {
        average = 0;
    }

    return average;
}

