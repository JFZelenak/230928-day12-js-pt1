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