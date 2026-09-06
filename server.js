// server.js
// Basic HTTP server using the built-in http module

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.log(`Incoming request -> Method: ${req.method}, URL: ${req.url}`);

  // Set default header
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to the Smart Utility Toolkit Server! 🚀");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page: This server is built using Node.js core 'http' module.");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact Page: Reach us at example@smartutility.com");
  } else {
    res.statusCode = 404;
    res.end("404 Error: Route Not Found ❌");
  }

  logger.log(`Response sent for URL: ${req.url}`);
});

server.listen(PORT, () => {
  logger.log(`Server is running at http://localhost:${PORT}`);
  console.log("Available routes:");
  console.log("  http://localhost:3000/");
  console.log("  http://localhost:3000/about");
  console.log("  http://localhost:3000/contact");
  console.log("  http://localhost:3000/anything-else  (404 demo)");
});
