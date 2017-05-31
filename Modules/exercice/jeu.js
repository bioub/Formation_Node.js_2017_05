'use strict';

const readline = require('readline');
const random = require('./random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Jeu {
    constructor({min = 0, max = 100} = {}) {
        this._entierAlea = random.getIntInclusive(min, max);
        this._essais = [];
    }

    jouer() {
        if (this._essais.length) {
            // 5 - Utiliser une template string
            console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
        }

        rl.question('Saisir un nombre ', (answer) => {

            // 6 - Utiliser parseInt et isNaN sur l'objet global Number
            const entierSaisi = Number.parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : vous devez saisir un nombre');
                return this.jouer();
            }

            this._essais.push(entierSaisi);

            if (entierSaisi < this._entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this._entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Gagné');
            rl.close();
        });
    }
}

module.exports = Jeu;