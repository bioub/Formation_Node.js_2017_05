const http = require('http');

const contacts = [{
    prenom: 'Jean',
    id: 123
}, {
    prenom: 'Eric',
    id: 456
}];


const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(contacts));
});

server.listen(8080, () => {
    console.log('Server stared');
});
