// diceGenerator.js
// Random Dice Generator using crypto module
// Usage: node diceGenerator.js [numberOfRolls]
// Example: node diceGenerator.js 5

const crypto = require("crypto");
const fs = require("fs");
const logger = require("./modules/logger");

const rolls = parseInt(process.argv[2]) || 1; // default: 1 roll if not specified
const historyFile = "./diceHistory.txt";

console.log(`---- Rolling Dice ${rolls} time(s) ----`);

function rollDice() {
  // crypto.randomInt(min, max) -> generates a cryptographically secure random integer
  // max is exclusive, so we use 7 to get values from 1 to 6
  return crypto.randomInt(1, 7);
}

const results = [];

for (let i = 1; i <= rolls; i++) {
  const value = rollDice();
  results.push(value);
  console.log(`Roll ${i}: 🎲 Dice Rolled: ${value}`);
}

logger.log(`All rolls: [${results.join(", ")}]`);

// Bonus: store dice roll history in a text file
const logEntry = `${new Date().toLocaleString()} -> Rolls: [${results.join(", ")}]\n`;
fs.appendFile(historyFile, logEntry, (err) => {
  if (err) {
    logger.error("Could not save dice history: " + err.message);
    return;
  }
  logger.log("Dice roll history saved to " + historyFile);
});
