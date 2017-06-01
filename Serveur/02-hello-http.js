const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    switch (req.url) {
        case '/':
            res.write(`
            <h1>Hello</h1>
            <p>${Date.now()}</p>
            `);
            break;
        case '/contact':
            res.write(`
            <h1>Page contact</h1>
            `);
            break;
        case '/redirect':
            res.statusCode = 302;
            res.setHeader('Location', 'http://www.google.fr/');
            break;
        default:
            res.statusCode = 404;
            res.write(`
            <h1>Not found</h1>
            `);
    }

    res.end();
});

server.listen(8080, () => {
    console.log('Server started');
});
