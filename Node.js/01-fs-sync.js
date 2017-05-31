const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname + '/../Node.js/logs/01.log');

fs.appendFileSync(logPath, Math.random() + '\n');
fs.appendFileSync(logPath, Math.random() + '\n');
fs.appendFileSync(logPath, Math.random() + '\n');
fs.appendFileSync(logPath, Math.random() + '\n');
fs.appendFileSync(logPath, Math.random() + '\n');