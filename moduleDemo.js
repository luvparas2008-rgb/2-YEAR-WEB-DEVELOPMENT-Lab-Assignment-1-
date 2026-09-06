// moduleDemo.js
// Demonstrates reusability of custom modules using require()

const { isEven, isOdd } = require("./modules/isEven");
const logger = require("./modules/logger");

logger.log("Module Demo Started");

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    console.log(`${num} is Even ✅`);
  } else {
    console.log(`${num} is Odd ❌`);
  }
});

logger.log("Checked isOdd(7) -> " + isOdd(7));
logger.error("This is just a sample error log for demonstration");

logger.log("Module Demo Finished");
