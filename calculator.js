

console.log("---- CLI Calculator Started ----");


const args = process.argv.slice(2);

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

console.log("Operation Requested:", operation);
console.log("Numbers Received:", num1, num2);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("❌ Invalid input. Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1); 
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
