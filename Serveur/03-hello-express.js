const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1><p>${Date.now()}</p>`);
});

app.get('/contact', (req, res) => {
    res.send(`<h1>Page contact</h1>`);
});

app.get('/api', (req, res) => {
    res.json({
        prenom: 'Romain'
    });
});

app.get('/redirect', (req, res) => {
    res.redirect('http://www.google.fr/');
});

app.listen(8080, () => {
    console.log('Server started');
});