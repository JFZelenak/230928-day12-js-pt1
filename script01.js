function calcTemp1() {
    let todaysTemp = randomNumber(-5,25);
    if (todaysTemp <= 10) {
        let message = `${todaysTemp}c. The weather is cold`;
        document.getElementById("calcTempOutput").innerHTML = message;
    } else {
        let message = `${todaysTemp}c. The weather is moderate`;
        document.getElementById("calcTempOutput").innerHTML = message;
    }
}

function randomNumber(min, max) {
    let randomNr = Math.floor(Math.random()*(max - min+1)+min);
    return randomNr;
}

function randomFood() {
    const favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];
    let chosenFood = favoriteFoods[randomNumber(0,3)];
    document.getElementById("randomFoodOutput").innerHTML = chosenFood;
}

function crystalGazer() {
    let nrOfChildren = prompt("number of children: ");
    let nameOfPartner = prompt("name of partner: ");
    let location = prompt("location: ");
    let jobTitle = prompt("job title: ");
    let message = `You will be a ${jobTitle} in ${location} and married to ${nameOfPartner} with ${nrOfChildren} children.`;
    document.getElementById("crystalGazerOutput").innerHTML = message;
}

function ageCalculator() {
    let birthYear1 = prompt("birth year: ");
    let currentYear1 = prompt("current year: ");
    let answer = ageCalculator2(birthYear1, currentYear1);
    document.getElementById("ageCalculatorOutput").innerHTML = answer;
}

function ageCalculator2(birthYear, currentYear) {
    let age = currentYear - birthYear;
    let message = `You are either ${age} or ` + (age-1);
    return message;
}

function ageCalculator3() {
    let birthYear1 = prompt("birth year: ");
    let currentYear1 = new Date().getFullYear();
    let answer = ageCalculator2(birthYear1, currentYear1);
    document.getElementById("ageCalculator3Output").innerHTML = answer;
}