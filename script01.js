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

function degreesToRadians() {
    let degrees = prompt("degrees: ");
    let answer = degreesToRadians2(degrees);
    document.getElementById("degreesToRadiansOutput").innerHTML = answer;
}

function degreesToRadians2(degrees) {
    let radians = degrees * (Math.PI/180);
    return radians;
}

function areaAndVolumeOfBox() {
    let width = prompt("width [m]: ");
    let height = prompt("height [m]: ");
    let depth = prompt("depth: ");
    let answer1 = areaOfBox(width, height);
    let answer2 = volumeOfBox(width, height, depth);
    document.getElementById("areaOfBoxOutput").innerHTML = answer1
    document.getElementById("volumeOfBoxOutput").innerHTML = answer2;
}

function areaOfBox(width, height,) {
    let area = width * height;
    return `The area of the box is: ${area}`;
}

function volumeOfBox(width, height, depth) {
    let volume = width * height * depth;
    return `The volume of the box is: ${volume}`;
}