const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname + '/../Node.js/logs/02.log');

fs.appendFile(logPath, Math.random() + '\n', (err) => {
    if (err) {
        return;
    }

    fs.appendFile(logPath, Math.random() + '\n', (err) => {
        if (err) {
            return;
        }

        fs.appendFile(logPath, Math.random() + '\n', (err) => {
            if (err) {
                return;
            }

            fs.appendFile(logPath, Math.random() + '\n', (err) => {
                if (err) {
                    return;
                }

                fs.appendFile(logPath, Math.random() + '\n', (err) => {
                    if (err) {
                        return;
                    }


                });
            });
        });
    });
});