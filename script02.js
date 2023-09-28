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

// ex 3 | Crystal Gazer
document.getElementById("btn03").addEventListener("click",function() {
    let message01 = crystalGazer();
    document.getElementById("output03").innerHTML = message01;
});

function crystalGazer() {
    let nrOfChildren = Number (prompt("number of children: "));
    let nameOfPartner = prompt("name of partner: ");
    let location = prompt("location: ");
    let jobTitle = prompt("job title: ");
    let message = `You will be a ${jobTitle} in ${location} and married to ${nameOfPartner} with ${nrOfChildren} children.`;
    return message;
}

// ex 4 | Age Calculator
document.getElementById("btn04").addEventListener("click",function() {
    let message01 = ageCalculator();
    document.getElementById("output04").innerHTML = message01;
});

function ageCalculator() {
    let birthYear1 = Number (prompt("birth year: "));
    let currentYear1 = Number (prompt("current year: "));
    let answer = ageCalculator2(birthYear1, currentYear1);
    return answer;
}

function ageCalculator2(birthYear, currentYear) {
    let age = currentYear - birthYear;
    let message = `You are either ${age} or ` + (age-1);
    return message;
}

// ex 5 | Age Calculator-improved
document.getElementById("btn05").addEventListener("click",function() {
    let message01 = ageCalculator3();
    document.getElementById("output05").innerHTML = message01;
});

function ageCalculator3() {
    let birthYear1 = Number (prompt("birth year: "));
    let currentYear1 = new Date().getFullYear();
    let answer = ageCalculator2(birthYear1, currentYear1);
    return answer;
}

// ex 6 | Degree-Radian Conversion
document.getElementById("btn06").addEventListener("click",function() {
    let message01 = degreesToRadians();
    document.getElementById("output06").innerHTML = message01;
});

function degreesToRadians() {
    let degrees = Number (prompt("degrees: "));
    let answer = degreesToRadians2(degrees);
    return answer;
}

function degreesToRadians2(degrees) {
    let radians = degrees * (Math.PI/180);
    return radians;
}

// ex 7 | Area and Volume of a box
document.getElementById("btn07").addEventListener("click",function() {
    let message01 = areaAndVolumeOfBox();
    document.getElementById("output07a").innerHTML = message01[0];
    document.getElementById("output07b").innerHTML = message01[1];
});

function areaAndVolumeOfBox() {
    let width = Number (prompt("width [m]: "));
    let height = Number (prompt("height [m]: "));
    let depth = Number (prompt("depth [m]: "));
    let answer1 = areaOfBox(width, height);
    let answer2 = volumeOfBox(width, height, depth);
    let answerArray = [answer1, answer2]
    return answerArray;
}

function areaOfBox(width, height,) {
    let area = width * height;
    return `The area of the box is: ${area}`;
}

function volumeOfBox(width, height, depth) {
    let volume = width * height * depth;
    return `The volume of the box is: ${volume}`;
}

// Intermediate | Capitalize
document.getElementById("btn08").addEventListener("click",function() {
    let message01 = capitalize();
    document.getElementById("output08").innerHTML = message01;
});

function capitalize() {
    let theString = prompt("Please enter a string: ");
    theString = theString.toLowerCase();
    let theArray = theString.split("");
    // console.log(theArray);
    let firstLetter = theArray[0];
    // console.log(firstLetter);
    let firstLetter2 = firstLetter.toUpperCase();
    // console.log(firstLetter2);
    theArray.shift();
    // console.log(theArray);
    theArray.unshift(firstLetter2)
    // console.log(theArray);
    let theString2 = theArray.join("");
    // console.log(theString);
    return theString2;
}

// Intermediate | Average Grade
document.getElementById("btn09").addEventListener("click",function() {
    let message01 = averageGrade();
    document.getElementById("output09a").innerHTML = message01[0];
    document.getElementById("output09b").innerHTML = message01[1];
});

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
    return answer;
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

// Advanced | Time Convert
document.getElementById("btn10").addEventListener("click",function() {
    let message01 = timeConvert();
    document.getElementById("output10").innerHTML = message01;
});

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
    let userInputMinutes = Number(prompt("Please input the minutes you wan to convert to hours and minutes: "));
    let answer = timeConvert2(userInputMinutes);
    return answer;
}