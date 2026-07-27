// Eranne Lenz 07/21/2026

/*
README:
This script powers the "Fated Chronicles" RPG Character Generator.
Clicking "Roll Character" rolls an animated d20, generates a random
character (race, class, stats, power score, rarity, special ability)
and show it on a character card. You can save a character to your roster by clicking "Save to Roster", which adds the currently
displayed character to a running roster list below the card to use for a new character or NPC for your RPG adventures.
*/

// Grab all the DOM elements 
const generateBtn = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const classFilter = document.getElementById("classFilter");
const luckInput = document.getElementById("luckInput");
const filterPreview = document.getElementById("filterPreview");
const characterCard = document.getElementById("characterCard");
const statList = document.getElementById("statList");
const rosterList = document.getElementById("rosterList");
const rosterCountEl = document.getElementById("rosterCount");
const d20 = document.getElementById("d20");

// Possible race/class/name pieces used to build a character
const races = ["Human", "Elf", "Orc", "Dwarf", "Tiefling", "Shade-born"];
const classPool = ["Necromancer", "Warrior", "Rogue", "Bard", "Ranger", "Sorcerer"];
const firstNames = ["McCormick", "Marshall", "Ursula", "Rosa", "Jojo", "Artemis"];
const titles = ["the Hollow", "of the Ashwood", "Grimspire", "the Unbound", "Duskbane"];

// Saved characters and the current character 
let heroRoster = [];
let currentCharacter = null;
// Object holding the stat totals needed to hit each rarity tier
const rarityThreshold = { legendary: 80, rare: 60 };

// Rolls stat between 3 and 20
function rollStat() {
  return Math.floor(Math.random() * 18) + 3;
}

// D20 rolling animation
function playD20Roll() {
  const result = Math.floor(Math.random() * 20) + 1;

  d20.classList.remove("rolling");
  void d20.offsetWidth;
  d20.classList.add("rolling");

  d20.addEventListener("animationend", function showResult() {
    d20.textContent = result;
    d20.removeEventListener("animationend", showResult);
  });
}

// Builds a brand new random character
function generateCharacter() {
  playD20Roll();

  const race = races[Math.floor(Math.random() * races.length)];

  // Use the filter dropdown's choice, or a random class if "Any" is selected
  const filterValue = classFilter.value;
  const chosenClass = filterValue !== "any"
    ? filterValue
    : classPool[Math.floor(Math.random() * classPool.length)];

  const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${titles[Math.floor(Math.random() * titles.length)]}`;

  const strength = rollStat();
  const dexterity = rollStat();
  const intelligence = rollStat();
  const charisma = rollStat();
  const total = strength + dexterity + intelligence + charisma;

  const luckBonus = parseFloat(luckInput.value) || 0;
  const powerScore = (total + luckBonus).toFixed(1);

  // Decide rarity tier based on stat total
  let rarity;
  if (total >= rarityThreshold.legendary) {
    rarity = "Legendary";
  } else if (total >= rarityThreshold.rare) {
    rarity = "Rare";
  } else {
    rarity = "Common";
  }

  const luckNote = (rarity === "Legendary" && luckBonus > 0)
    ? " (luck bonus sealed the deal!)"
    : "";

  // Special ability text based on the chosen class
  let specialAbility;
  switch (chosenClass) {
    case "Necromancer":
      specialAbility = "Raise a spirit ally from fallen foes.";
      break;
    case "Warrior":
      specialAbility = "Shrug off the next hit taken.";
      break;
    case "Rogue":
      specialAbility = "Vanish into shadow for one turn.";
      break;
    case "Bard":
      specialAbility = "Inspire allies with a battle hymn.";
      break;
    case "Ranger":
      specialAbility = "Mark a target for guaranteed hit.";
      break;
    default:
      specialAbility = "Channel raw arcane energy.";
  }

  const rollTime = new Date().toLocaleTimeString();

  currentCharacter = { name, race, chosenClass, strength, dexterity, intelligence, charisma, rarity, powerScore, specialAbility, rollTime };

  updateCharacterCard(rarity, luckNote);
}

function updateCharacterCard(rarity, luckNote) {
  const c = currentCharacter;

  document.getElementById("charName").textContent = c.name;
  document.getElementById("charRaceClass").textContent = `${c.race} - ${c.chosenClass}`;

  while (statList.firstChild) {
    statList.removeChild(statList.firstChild);
  }
  const stats = [
    ["Strength", c.strength],
    ["Dexterity", c.dexterity],
    ["Intelligence", c.intelligence],
    ["Charisma", c.charisma]
  ];
  for (const [label, value] of stats) {
    const li = document.createElement("li");
    li.textContent = `${label}: ${value}`;
    statList.appendChild(li);
  }

  document.getElementById("powerScore").textContent = `Power Score: ${c.powerScore}`;
  document.getElementById("rarityBadge").textContent = `Rarity: ${c.rarity}${luckNote}`;
  document.getElementById("specialAbility").textContent = `Special Ability: ${c.specialAbility}`;

  characterCard.classList.remove("rarity-common", "rarity-rare", "rarity-legendary");
  characterCard.classList.add(`rarity-${rarity.toLowerCase()}`);
}

// Savescharacter into the roster list
function saveCharacter() {
  if (!currentCharacter) {
    alert("Roll a character before saving one!");
    return;
  }

  heroRoster.push(currentCharacter);

  const li = document.createElement("li");
  li.textContent = `${currentCharacter.name} - ${currentCharacter.race} ${currentCharacter.chosenClass} (${currentCharacter.rarity})`;
  rosterList.appendChild(li);

  rosterCountEl.textContent = heroRoster.length;
}

generateBtn.addEventListener("click", generateCharacter);
saveBtn.addEventListener("click", saveCharacter);

classFilter.addEventListener("change", function () {
  filterPreview.textContent = `Filtering for: ${classFilter.value === "any" ? "Any" : classFilter.value}`;
});