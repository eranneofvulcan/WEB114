//Variable: name, Data type: string, Explanation: My name is pronounced like Erin, but spelled like Eranne.
//Variable: green, Data type: string, Explanation: My favorite shade of green is hunter green or lime green.
//Variable: hotdog, Data type: string, Explanation: I got my first Chicago Dog at Portillo's in Chicago when I was in middle school, and it's been my favorite food ever since.
//Variable: black cat, Data type: string, Explanation: I have been compared to black cats numerous times by friends and family. I relate to their mystery and aloofness. 
//Variable: fall, Data type: string, Explanation: I am a huge Halloween fan, and also love when it's cold and the leaves start to turn.
//Variable: age, Data type: number, Explanation: I was born January 3rd, 1998. I am a capricorn.
//Variable: student, Data type: boolean, Explanation: I am a student at JCCC.

let myName = 'Eranne';
let color = 'green';
let food = 'hotdogs';
let animal = 'black cat';
let season = 'fall';
let age = 28;
let student = true;

console.log(
    "My name is " + myName +
    ". My favorite color is " + color +
    ", and my favorite food are " + food + "."
);
console.log(
    `I am ${age} years old. My favorite season is ${season}, and my favorite animal is a ${animal}.`
);
//Which data type was easiest to choose? Why?
//String was the easiest because almost all my variables were words

//Which variable was hardest to decide a data type for?
//Student was the hardest because I had to decide whether to use boolean true/false or a string

//What happens if a number is stored as a string in JavaScript?
//It will be treated as text instead of a number, so math operations will not work

//Why is it helpful to plan data types before coding?
//Planning data types helps prevent errors and makes the code easier to understand
