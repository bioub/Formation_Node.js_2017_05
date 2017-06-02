/*
Avec Express
1 / Créer un API REST avec 3 callbacks
- GET /api/contacts qui répond en JSON le tableau
- GET /api/contacts/123 qui répond en JSON le contact 123
- DELETE /api/contacts/123 qui supprime le contact, ne
retourne rien, et définit un status code à 204

2 / Répondre 404 si le contact 123 à déjà été supprimé
 */
const express = require('express');
const morgan = require('morgan');

const authorize = (req, res, next) => {
    const token = req.headers.authorization;

    // token ok
    if (token === '123') {
        return next();
    }

    res.statusCode = 401;
    res.json({
        error: 'Bad token'
    });
};

const contacts = [{
    prenom: 'Jean',
    id: 123
}, {
    prenom: 'Eric',
    id: 456
}, {
    prenom: 'Martin',
    id: 789
}];

const app = express();
app.use(morgan('dev'));

/*
app.use((req, res, next) => {
   console.log(`${req.method} ${req.url}`);
   next();
});
*/

app.get('/api/contacts', (req, res, next) => {
    res.json(contacts);
});

app.get('/api/contacts/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return next(); // 404
        // return next(err); // 500
    }

    res.json(contact);
});

// app.delete('/api/contact/:id', authorize);
app.delete('/api/contacts/:id', authorize, (req, res, next) => {
    const id = Number(req.params.id);
    const i = contacts.findIndex(c => c.id === id);

    if (i === -1) {
        return next();
    }

    contacts.splice(i, 1);
    res.statusCode = 204;
    res.end();
});

// 404
app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        error: 'Not found'
    });
});

// 500
app.use('/api', (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        error: err.message
    });
});

app.listen(8080, () => {
   console.log('Server started');
});