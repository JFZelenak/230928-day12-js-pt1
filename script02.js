// random number generator
function randomNumber(min, max) {
    let randomNr = Math.floor(Math.random()*(max - min+1)+min);
    return randomNr;
}

// ex 1 | Temperature v1.0
document.getElementById("btn01").addEventListener("click",function() {
    let message01 = calcTemp1();
    document.getElementById("output01").innerHTML = message01;
});

function calcTemp1() {
    let todaysTemp = randomNumber(-5,25);
    message01 = "";
    if (todaysTemp <= 10) {
        message01 = ` ${todaysTemp}c. The weather is cold`;
    } else {
        message01 = ` ${todaysTemp}c. The weather is moderate`;
    }
    return message01;
}

// ex 2 | Random Food
document.getElementById("btn02").addEventListener("click",function() {
    let message01 = randomFood();
    document.getElementById("output02").innerHTML = message01;
});

function randomFood() {
    const favoriteFoods = ["selbstgemachte Pizza mit Schinken und Käse", "Burger, Chicken Nuggets und Pommes bestellen", "selbstgemachte Köfte mit Erdäpfeln", "Nudeln mit Soße", "Wok-Huhn mit Reis und Gemüse", "selbstgemachtes Huhn mit Tzatziki und Pommes"];
    let chosenFood = favoriteFoods[randomNumber(0,(favoriteFoods.length-1))];
    return chosenFood;
}