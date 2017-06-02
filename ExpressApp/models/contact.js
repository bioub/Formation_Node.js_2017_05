var mongoose = require('mongoose');

var Contact = mongoose.model('contacts', {
    prenom: String,
    nom: String
});

module.exports = Contact;