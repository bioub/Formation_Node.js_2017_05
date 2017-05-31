const fs = require('fs-extra');
const path = require('path');
const async = require('async');

const logPath = path.resolve(__dirname + '/../Node.js/logs/04.log');

fs.appendFile(logPath, Math.random() + '\n')
    .then(() => fs.appendFile(logPath, Math.random() + '\n'))
    .then(() => fs.appendFile(logPath, Math.random() + '\n'))
    .then(() => fs.appendFile(logPath, Math.random() + '\n'))
    .then(() => fs.appendFile(logPath, Math.random() + '\n'));


