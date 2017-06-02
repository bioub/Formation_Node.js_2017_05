var mongoose = require('mongoose');

var Contact = mongoose.model('contacts', {
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    }
});

module.exports = Contact;