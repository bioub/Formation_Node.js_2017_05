var Contact = require('../models/contact');

module.exports.list = function(req, res, next) {
    Contact.find()
        .then(contacts => {
            res.render('contacts/list', { contacts: contacts });
        })
        .catch(next);
};

module.exports.show = function(req, res, next) {
    const id = req.params.id;

    Contact.findById(id)
        .then(contact => {
            if (!contact) {
                return next(); // 404
            }

            res.render('contacts/show', { contact: contact });
        })
        .catch(next);
};

module.exports.deleteConfirm = function(req, res, next) {
    res.render('contacts/delete');
};

module.exports.delete = function(req, res, next) {
    if (req.body.confirm === 'non') {
        return res.redirect('/contacts');
    }

    const id = req.params.id;

    Contact.findByIdAndRemove(id)
        .then(contact => {
            if (!contact) {
                return next(); // 404
            }

            res.redirect('/contacts');
        })
        .catch(next);
};

module.exports.addForm = function(req, res, next) {
    res.render('contacts/add');
};


module.exports.add = function(req, res, next) {
    var contact = new Contact(req.body);

    contact.save()
        .then(() => {
            res.redirect('/contacts');
        })
        .catch(next);
};