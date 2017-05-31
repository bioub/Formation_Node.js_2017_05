'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1 - Réécrire ces fonctions sous la forme
// const maFct = function() {}
const getRandom = function() {
  return Math.random();
};

const getRandomArbitrary = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 2 - Ecrire la fonction constructeur et sa méthode jouer
// avec le mot clé class
// 3 - Utiliser la valeur par défault pour options
// 4 - Remplacer tous les var par let ou const
class Jeu {
  constructor({min = 0, max = 100} = {}) {
    this._entierAlea = getRandomIntInclusive(min, max);
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

const jeu = new Jeu({
  min: 10,
  max: 20,
});

jeu.jouer();
