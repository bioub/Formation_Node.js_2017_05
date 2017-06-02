var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

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

/* Liste des contacts */
router.get('/', function(req, res, next) {
  res.render('contacts/list', { contacts: contacts });
});

/* Détails d'un contact */
router.get('/:id', function(req, res, next) {
    const id = Number(req.params.id);
    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return next(); // 404
        // return next(err); // 500
    }

    res.render('contacts/show', { contact: contact });
});

/* Suppression d'un contact (affichage du form) */
router.get('/:id/delete', function(req, res, next) {
    res.render('contacts/delete');
});

/* Suppression d'un contact */
router.post('/:id/delete', bodyParser.urlencoded({extended: false}), function(req, res, next) {
    if (req.body.confirm === 'oui') {
        const id = Number(req.params.id);
        const i = contacts.findIndex(c => c.id === id);

        if (i === -1) {
            return next();
        }

        contacts.splice(i, 1);
    }

    res.redirect('/contacts');
});

module.exports = router;
