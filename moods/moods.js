// Eranne Lenz 07/17/2026

const display = document.querySelector("#quote");
const moodTitle = document.querySelector("#moodTitle");
const buttons = document.querySelector("#buttons");

const moods = {
  happy: {
    name: "Happy",
    bg: "#FFD700",
    text: "#bd26b0",
    message: "Warm smiles and the sun's kisses!"
  },
  calm: {
    name: "Calm",
    bg: "#AEDFF7",
    text: "#125da3",
    message: "Take a deep breath and think of something peaceful."
  },
  angry: {
    name: "Angry",
    bg: "#FF4C4C",
    text: "#080600",
    message: "Reflect on what is making you angry and find a way to release it."
  },
  sleepy: {
    name: "Sleepy",
    bg: "#4d6df0",
    text: "#E6E6FA",
    message: "Time to rest your eyes."
  }
};

function changeMood(moodName) {
  const mood = moods[moodName];

  document.body.style.backgroundColor = mood.bg;
  document.body.style.color = mood.text;
  display.textContent = mood.message;
  moodTitle.textContent = mood.name;

  console.log("Mood selected:", moodName);
  console.log("Mood settings:", mood);
}

function handleHappyClick() {
  changeMood("happy");
}

function handleCalmClick() {
  changeMood("calm");
}

function handleAngryClick() {
  changeMood("angry");
}

function handleSleepyClick() {
  changeMood("sleepy");
}

document.querySelector("#happyBtn").addEventListener("click", handleHappyClick);
document.querySelector("#calmBtn").addEventListener("click", handleCalmClick);
document.querySelector("#angryBtn").addEventListener("click", handleAngryClick);
document.querySelector("#sleepyBtn").addEventListener("click", handleSleepyClick);