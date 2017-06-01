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

app.get('/api/contact', (req, res, next) => {
    res.json(contacts);
});

app.get('/api/contact/123', (req, res, next) => {
    const contact = contacts.find(c => c.id === 123);
    res.json(contact);
});

app.delete('/api/contact/123', (req, res, next) => {
    const i = contacts.findIndex(c => c.id === 123);
    contacts.splice(i, 1);
    res.statusCode = 204;
    res.end();
});

app.listen(8080, () => {
   console.log('Server started');
});