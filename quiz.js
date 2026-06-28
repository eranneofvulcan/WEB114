"use strict";

/* Eranne Lenz 6/25/2026

Psuedo code planning
Initialize score = 0

Question 1: Who is my favorite superhero character?
    Variable name: favHeroGuess
    Correct answer: "Spiderman"
    Validation: Check that the input is not empty or just spaces, convert to lowercase before comparing, and use === to check for exact match


Question 2: What is my favorite anime?
   Variable name: favAnimeGuess
   Correct answer: "Cowboy Bebop"
   Validation: Check that the input is not empty or just spaces, convert to lowercase before comparing, and use === to check for exact match
   
Question 3: Do I have a tattoo sleeve?
   Variable name: tattooGuess
   Correct answer: "yes"
   Validation: Check that the input is not empty or just spaces, convert to lowercase before comparing, and use === to check for exact match

Question 4: What country do I want to visit the most?
   Variable name: favCountryGuess
   Correct answer: "Japan"
   Validation: Check that the input is not empty or just spaces, convert to lowercase before comparing, and use === to check for exact match

Math: Calculate percentage
   percentage = (score / 4) * 100
   Use Math.round() to get a clean whole number

Final feedback logic using if / else if / else:
   if score === 4 → perfect score message
   else if score === 3 → great job message
   else if score < 2 && score > 0 → encouragement message
   else (score === 0) → better luck next time message

Logical operators:
   === for: checking exact match of answers
   && for: checking score < 2 AND score > 0 
   || for: checking if an answer matches one of two acceptable spellings
   ! for: confirming input is NOT empty before processing
*/

console.log("=== My Quiz Game ===");


let score = 0;


let favHeroGuess = prompt("Question 1: Who is my favorite superhero character?");

if (favHeroGuess && favHeroGuess.trim() !== "") {
    if (favHeroGuess.toLowerCase() === "spiderman") {
        score = score + 1; 
        alert("Question 1 Correct! With great power comes great responsibility.");
    } else {
        alert("Question 1 Incorrect. The answer was Spiderman!");
    }
} else {
    alert("WARNING: You didn't enter an answer for Question 1");
}

let favAnimeGuess = prompt("Question 2: What is my favorite anime?");

if (favAnimeGuess && favAnimeGuess.trim() !== "") {
    if (favAnimeGuess.toLowerCase() === "cowboy bebop") {
        score = score + 1; 
        alert("Question 2 Correct! See you, space cowboy...");
    } else {
        alert("Question 2 Incorrect. My favorite anime is Cowboy Bebop!");
    }
} else {
    alert("WARNING: You didn't enter an answer for Question 2");
}

let tattooGuess = prompt("Question 3: Do I have a tattoo sleeve? (Enter yes or no)");

if (tattooGuess && tattooGuess.trim() !== "") {
    if (tattooGuess.trim().toLowerCase() === "yes") {
        score = score + 1;
        alert("Question 3 Correct! Yes, I do have a tattoo sleeve.");
    } else {
        alert("Question 3 Incorrect. The answer was yes!");
    }
} else {
    alert("WARNING: You didn't enter an answer for Question 3");
}



let favCountryGuess = prompt("Question 4: What country do I want to visit the most?");


if (favCountryGuess && favCountryGuess.trim() !== "") {
    if (favCountryGuess.toLowerCase() === "japan") {
        score = score + 1;
        alert("Question 4 Correct! I want to visit Japan the most.");
    } else {
        alert("Question 4 Incorrect. I want to visit Japan the most!");
    }
} else {
    alert("You didn't enter an answer for Question 4");
}


let percentage = Math.round((score / 4) * 100);



if (score === 4) {
    alert("PERFECT! You got " + score + "/4 (" + percentage + "%).");

} else if (score === 3) {
    alert("Almost perfect! You got " + score + "/4 (" + percentage + "%).");

} else if (score < 2 && score > 0) {
    alert("You got " + score + "/4 (" + percentage + "%). You got one!");

} else if (!score || score === 0) {
    alert("You got " + score + "/4 (" + percentage + "%). Better luck next time!");
}

alert(
    "QUIZ SUMMARY\n" +
    "─────────────────────\n" +
    "Total Questions : 4\n" +
    "Correct Answers : " + score + "\n" +
    "Your Score      : " + percentage + "%\n" +
    "─────────────────────\n" +
    (percentage >= 75
        ? "You passed!!"
        : "Not quite, you'll get there!")
);

