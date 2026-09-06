// calculator.js
// CLI-Based Calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

console.log("---- CLI Calculator Started ----");

// process.argv[0] -> path to node
// process.argv[1] -> path to this file
// process.argv[2] onwards -> actual arguments passed by user
const args = process.argv.slice(2);

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

console.log("Operation Requested:", operation);
console.log("Numbers Received:", num1, num2);

// Basic validation
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("❌ Invalid input. Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1); // exit with error code
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = num1 + num2;
    console.log(`✅ Result: ${num1} + ${num2} = ${result}`);
    break;

  case "sub":
    result = num1 - num2;
    console.log(`✅ Result: ${num1} - ${num2} = ${result}`);
    break;

  case "mul":
    result = num1 * num2;
    console.log(`✅ Result: ${num1} * ${num2} = ${result}`);
    break;

  case "div":
    if (num2 === 0) {
      console.log("❌ Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    console.log(`✅ Result: ${num1} / ${num2} = ${result}`);
    break;

  default:
    console.log(`❌ Invalid operation "${operation}". Supported: add, sub, mul, div`);
    process.exit(1);
}

console.log("---- CLI Calculator Finished ----");
