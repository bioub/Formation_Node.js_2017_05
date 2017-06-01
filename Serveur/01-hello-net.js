const net = require('net');

const server = net.createServer((soc) => {

    soc.on('close', () => {
        console.log('Client disconnected');
    });

    soc.on('data', (data) => {
        console.log('Data received');
    });

    soc.pipe(soc);

    console.log('Client connected');
});


server.listen(1234, () => {
    console.log('Server started');
});
