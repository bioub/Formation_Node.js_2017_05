
'use strict';

const Jeu = require('./jeu');

const jeu = new Jeu({
    min: 10,
    max: 20,
});

jeu.jouer();
