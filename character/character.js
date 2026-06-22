
const setting = "haunted forest";


// Step 4: Welcome message

alert(`Welcome! My name is Eranne, and today we're building a hero
who lives in ${setting}.
Get ready to create your character!`);


// Step 5: Character name
const charName = prompt(`What is your character's name?`, "Wanderer");

// Step 6: Pet / companion
const petName = prompt(`What type of pet or companion does ${charName} have?`);

// Step 7: Superpower
const superpower = prompt(`What superpower does ${charName} possess?`);

// Step 8: Years of training
const trainingYearsText = prompt(`How many years has ${charName} been training?`);

const trainingYears = Number(trainingYearsText);

console.log("trainingYearsText:", trainingYearsText, typeof trainingYearsText);
console.log("trainingYears:", trainingYears, typeof trainingYears);


const powerLevel = trainingYears * 10;

// Step 9: Likes fighting monsters
const likesFighting = confirm(`Does ${charName} like fighting monsters?
Click OK for YES  Click Cancel for NO`);

console.log("likesFighting:", likesFighting, typeof likesFighting);

// Step 10: Loading / preparing message
alert(`Gathering mana for ${charName}... almost ready!`);

// Step 11: Final character story
alert(`====================================
  CHARACTER PROFILE
====================================

  Name:           ${charName}
  Pet:            ${petName}
  Superpower:     ${superpower}
  Power Level:    ${powerLevel}
  Monster Fighter? ${likesFighting ? "Yes" : "No"}

------------------------------------
  STORY
------------------------------------

  In the ${setting} of Skull Island, ${charName} rides a mighty ${petName}, wielding the incredible power of ${superpower} to vanquish evil and protect the innocent.

====================================`);
