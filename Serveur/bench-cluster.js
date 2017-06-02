const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const contacts = [{
    prenom: 'Jean',
    id: 123
}, {
    prenom: 'Eric',
    id: 456
}];

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs - 1; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server

    const server = http.createServer((req, res) => {
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(contacts));
    });

    server.listen(8081, () => {
        console.log('Server stared');
    });

    console.log(`Worker ${process.pid} started`);
}