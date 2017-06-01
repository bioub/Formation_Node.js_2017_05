const fs = require('fs');
const util = require('util');
const path = require('path');
const async = require('async');

const logPath = path.resolve(__dirname + '/../Node.js/logs/05.log');

/*
const log = function(path, msg) {
  return new Promise((resolve, reject) => {
      fs.appendFile(path, msg, (err) => {
          if (err) {
              return reject(err);
          }
          resolve();
      })
  });
};
*/

const log = util.promisify(fs.appendFile);


log(logPath, Math.random() + '\n')
    .then(() => log(logPath, Math.random() + '\n'))
    .then(() => log(logPath, Math.random() + '\n'))
    .then(() => log(logPath, Math.random() + '\n'))
    .then(() => log(logPath, Math.random() + '\n'))

