 Smart Utility Toolkit — Unit 1 (Node.js Core Modules)

Sirf Node.js built-in modules use kiye gaye hain: `process`, `http`, `fs`, `crypto`.
Koi npm package, Express, ya database nahi use kiya gaya.

 Folder Structure
```
smart-utility-toolkit/
├── calculator.js       -> CLI calculator (process.argv)
├── moduleDemo.js        -> custom modules ko reuse karta hai
├── server.js             -> HTTP server with routes
├── fileManager.js        -> fs module CRUD operations
├── diceGenerator.js      -> crypto module random dice
├── modules/
│   ├── isEven.js         -> custom module (isEven/isOdd)
│   └── logger.js         -> custom logger module (bonus: timestamps)
└── README.md
```

 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 0    # divide by zero error handled
node calculator.js xyz 1 2     # invalid operation handled
```

 2. Custom Module Demo (isEven + logger)
```
node moduleDemo.js
```
Ye file `modules/isEven.js` aur `modules/logger.js` ko `require()` se import karke
dikhati hai ki custom module kaise reuse hota hai.

 3. HTTP Server
```
node server.js
```
Server `http://localhost:3000` par chalega. Browser/Postman mein test karo:
| Route | Response |
|---|---|
| `/` | Welcome message |
| `/about` | About page |
| `/contact` | Contact page |
| kuch bhi aur | 404 Error |

Server band karne ke liye terminal mein `Ctrl + C` dabao.

 4. File Manager (fs module CRUD)
```
node fileManager.js create   # sample.txt banata hai
node fileManager.js read     # content dikhata hai
node fileManager.js update   # naya text append karta hai
node fileManager.js read     # updated content dikhata hai
node fileManager.js delete   # file delete karta hai
```
Agar file exist nahi karti (read/update/delete se pehle create nahi kiya), to
error terminal mein gracefully dikhega, program crash nahi karega.

 5. Dice Generator (crypto module)
```
node diceGenerator.js          # 1 dice roll
node diceGenerator.js 5        # 5 dice rolls
```
`crypto.randomInt(1, 7)` secure random number (1-6) deta hai.
Bonus: har roll ki history `diceHistory.txt` file mein save hoti hai (timestamp ke saath).

 Execution Flow Notes (for analysis)
- `calculator.js` aur `diceGenerator.js` fully synchronous-style output dete hain
  (console logs turant order mein print hote hain).
- `fileManager.js` mein `fs` ke async methods (`writeFile`, `readFile`, `appendFile`,
  `unlink`) use kiye gaye hain — isliye "File Manager Script End" line callback se
  PEHLE print hoti hai. Ye Node.js ke non-blocking/asynchronous nature ko dikhata hai.
- `server.js` event-driven hai: har incoming request par `logger.log()` call hota hai,
  jisse terminal mein request/response ka trace dikhta hai.

 Bonus Features Implemented
- ✅ Timestamp logs in logger module
- ✅ Dice roll history saved to `diceHistory.txt`
- ✅ Calculator supports 4 operations (add, sub, mul, div) instead of just 2
