# Smart Utility Toolkit

A small collection of Node.js scripts built using only core/built-in modules — no npm packages, no frameworks, no database. The goal was to get comfortable with `process`, `fs`, `http`, and `crypto` by building a few practical mini-tools.

## What's inside

```
smart-utility-toolkit/
├── calculator.js       # CLI calculator using process.argv
├── moduleDemo.js        # demonstrates reusing custom modules
├── server.js             # basic HTTP server with a few routes
├── fileManager.js        # simple CRUD operations using fs
├── diceGenerator.js      # secure random dice roller using crypto
├── modules/
│   ├── isEven.js         # custom module — checks even/odd
│   └── logger.js         # custom logger with timestamps
└── README.md
```

## 1. CLI Calculator

Basic calculator that runs from the command line and takes the operation and numbers as arguments.

```bash
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 0    # handles divide by zero
node calculator.js xyz 1 2     # handles invalid operations
```

## 2. Custom Module Demo

`moduleDemo.js` requires in `modules/isEven.js` and `modules/logger.js` to show how custom modules can be written and reused across a project.

```bash
node moduleDemo.js
```

## 3. HTTP Server

A plain Node HTTP server, no Express involved.

```bash
node server.js
```

Runs on `http://localhost:3000`. Try these routes in your browser or Postman:

| Route | Response |
|---|---|
| `/` | Welcome message |
| `/about` | About page |
| `/contact` | Contact page |
| anything else | 404 error |

Stop the server with `Ctrl + C`.

## 4. File Manager

CRUD-style operations on a text file using the `fs` module.

```bash
node fileManager.js create   # creates sample.txt
node fileManager.js read     # prints the content
node fileManager.js update   # appends new text
node fileManager.js read     # prints the updated content
node fileManager.js delete   # deletes the file
```

If you try to read/update/delete before creating the file, it fails gracefully with an error message instead of crashing.

## 5. Dice Generator

Rolls a secure random dice using `crypto.randomInt`.

```bash
node diceGenerator.js       # rolls once
node diceGenerator.js 5     # rolls 5 times
```

Every roll gets logged with a timestamp to `diceHistory.txt`.

## A few notes on how this behaves

- `calculator.js` and `diceGenerator.js` are basically synchronous — output prints in order, right away.
- `fileManager.js` uses the async versions of `fs` methods (`writeFile`, `readFile`, `appendFile`, `unlink`), so the "script end" log actually prints *before* the callback finishes — a good example of Node's non-blocking behavior.
- `server.js` is event-driven — every incoming request triggers `logger.log()`, so you can watch requests come in through the terminal.

## Extras

- Timestamped logs via the custom logger module
- Dice roll history saved to a file
- Calculator supports 4 operations (add, sub, mul, div)

---

Built as a learning exercise to understand Node's core modules without relying on any external packages.
