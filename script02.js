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

function randomNumber(min, max) {
    let randomNr = Math.floor(Math.random()*(max - min+1)+min);
    return randomNr;
}