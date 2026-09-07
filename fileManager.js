

const fs = require("fs");
const logger = require("./modules/logger");

const filePath = "./sample.txt";
const action = process.argv[2];

console.log("---- File Manager Started ----");
logger.log(`Action requested: ${action}`);

switch (action) {
  case "create":
   
    fs.writeFile(filePath, "Hello! This file was created by fileManager.js\n", (err) => {
      if (err) {
        logger.error("Failed to create file: " + err.message);
        return;
      }
      logger.log("✅ File created successfully: " + filePath);
    });
    break;

  case "read":
   
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        logger.error("❌ Could not read file. Does it exist? -> " + err.message);
        return;
      }
      console.log("---- File Content ----");
      console.log(data);
      logger.log("✅ File read successfully");
    });
    break;

  case "update":
   
    fs.appendFile(filePath, `Updated on: ${new Date().toLocaleString()}\n`, (err) => {
      if (err) {
        logger.error("❌ Could not update file (create it first). -> " + err.message);
        return;
      }
      logger.log("✅ File updated (appended) successfully: " + filePath);
    });
    break;

  case "delete":
   
    fs.unlink(filePath, (err) => {
      if (err) {
        logger.error("❌ Could not delete file. It may not exist. -> " + err.message);
        return;
      }
      logger.log("✅ File deleted successfully: " + filePath);
    });
    break;

  default:
    console.log("❌ Invalid action. Usage: node fileManager.js <create|read|update|delete>");
    process.exit(1);
}

logger.log("File Manager operation dispatched (check async result above)");
console.log("---- File Manager Script End (async callbacks may still run) ----");
