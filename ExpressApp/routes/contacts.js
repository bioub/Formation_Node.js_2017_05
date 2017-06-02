var express = require('express');
var bodyParser = require('body-parser');
var contactCtrl = require('../controllers/contacts');
var router = express.Router();

/* Liste des contacts */
router.get('/',
    contactCtrl.list,
);

/* Ajouter un contact (affichage du form) */
router.get('/add',
    contactCtrl.addForm,
);

/* Ajouter un contact */
router.post('/add',
    bodyParser.urlencoded({extended: false}),
    contactCtrl.add,
);

/* Détails d'un contact */
router.get('/:id',
    contactCtrl.show,
);

/* Suppression d'un contact (affichage du form) */
router.get('/:id/delete',
    contactCtrl.deleteConfirm,
);

/* Suppression d'un contact */
router.post('/:id/delete',
    bodyParser.urlencoded({extended: false}),
    contactCtrl.delete,
);


module.exports = router;
