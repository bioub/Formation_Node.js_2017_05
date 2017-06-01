const fs = require('fs');
const path = require('path');
const async = require('async');

const logPath = path.resolve(__dirname + '/../Node.js/logs/03.log');

async.series([
    cb => fs.appendFile(logPath, Math.random() + '\n', cb),
    cb => fs.appendFile(logPath, Math.random() + '\n', cb),
    cb => fs.appendFile(logPath, Math.random() + '\n', cb),
    cb => fs.appendFile(logPath, Math.random() + '\n', cb),
    cb => fs.appendFile(logPath, Math.random() + '\n', cb),
], (err) => {
    if (err) {
       return console.log(err);
    }

    console.log('Done');
});
