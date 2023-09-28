function calcTemp1() {
    let todaysTemp = randomNumber(-5,25);
    let message = "";
    if (todaysTemp <= 10) {
        message = `${todaysTemp}c. The weather is cold`;
    } else {
        message = `${todaysTemp}c. The weather is moderate`;
    }
    document.getElementById("calcTempOutput").innerHTML = message;
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
    let nrOfChildren = Number (prompt("number of children: "));
    let nameOfPartner = prompt("name of partner: ");
    let location = prompt("location: ");
    let jobTitle = prompt("job title: ");
    let message = `You will be a ${jobTitle} in ${location} and married to ${nameOfPartner} with ${nrOfChildren} children.`;
    document.getElementById("crystalGazerOutput").innerHTML = message;
}

function ageCalculator() {
    let birthYear1 = Number (prompt("birth year: "));
    let currentYear1 = Number (prompt("current year: "));
    let answer = ageCalculator2(birthYear1, currentYear1);
    document.getElementById("ageCalculatorOutput").innerHTML = answer;
}

function ageCalculator2(birthYear, currentYear) {
    let age = currentYear - birthYear;
    let message = `You are either ${age} or ` + (age-1);
    return message;
}

function ageCalculator3() {
    let birthYear1 = Number (prompt("birth year: "));
    let currentYear1 = new Date().getFullYear();
    let answer = ageCalculator2(birthYear1, currentYear1);
    document.getElementById("ageCalculator3Output").innerHTML = answer;
}

function degreesToRadians() {
    let degrees = Number (prompt("degrees: "));
    let answer = degreesToRadians2(degrees);
    document.getElementById("degreesToRadiansOutput").innerHTML = answer;
}

function degreesToRadians2(degrees) {
    let radians = degrees * (Math.PI/180);
    return radians;
}

function areaAndVolumeOfBox() {
    let width = Number (prompt("width [m]: "));
    let height = Number (prompt("height [m]: "));
    let depth = Number (prompt("depth [m]: "));
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

function capitalize() {
    let theString = prompt("Please enter a string: ");
    let theArray = theString.split("");
    console.log(theArray);
    let firstLetter = theArray[0];
    console.log(firstLetter);
    let firstLetter2 = firstLetter.toUpperCase();
    console.log(firstLetter2);
    theArray.shift();
    console.log(theArray);
    theArray.unshift(firstLetter2)
    console.log(theArray);
    let theString2 = theArray.join("");
    console.log(theString);
    document.getElementById("capitalizeOutput").innerHTML = theString2;
}

function averageGrade() {
    let grade1 = 0;
    while (checkValidtity(grade1) == false) {
        grade1 = Number (prompt("Grade for Math [number from 1 to 5]: "))
    }
    let grade2 = 0;
    while (checkValidtity(grade2) == false) {
        grade2 = Number (prompt("Grade for Physics [number from 1 to 5]: "))
    }
    let grade3 = 0;
    while (checkValidtity(grade3) == false) {
        grade3 = Number (prompt("Grade for English [number from 1 to 5]: "))
    }
    let answer = averageGrade2(grade1, grade2, grade3);
    document.getElementById("averageGrade1Output").innerHTML = answer[0];
    document.getElementById("averageGrade2Output").innerHTML = answer[1];
}

function averageGrade2(grade1, grade2, grade3) {
    let sum = grade1 + grade2 + grade3;
    let average = sum / 3;
    let solution = [sum, average];
    return solution;
}

function checkValidtity(number) {
    if (number < 6 && number > 0) {
        return true;
    } else {
        return false;
    }
}

function timeConvert2(minutes) {
    let hours = Math.floor(minutes / 60);
    let newMinutes = minutes - (hours * 60);
    let minutesString = "minutes"
    if (minutes == 1) {
        minutesString = "minute"
    }
    let hoursString = "hours"
    if (hours == 1) {
        hoursString = "hour"
    }
    let newMinutesString = "minutes"
    if (newMinutes == 1) {
        newMinutesString = "minute"
    }
    return `${minutes} ${minutesString} = ${hours} ${hoursString} and ${newMinutes} ${newMinutesString}`;
}

function timeConvert() {
    let userInputMinutes = Number(prompt("Please input the minutes yuo wan to convert to hours and minutes: "));
    let answer = timeConvert2(userInputMinutes);
    document.getElementById("timeConvertOutput").innerHTML = answer;
}