// On manipule des objets existants
console.log(typeof Math); // object
console.log(typeof console); // object

// On peut étendre (sauf verrou) les objets
console.log(Math.sum); // undefined

Math.sum = function(a, b) {
  return Number(a) + Number(b);
};

console.log(Math.sum(1, 2)); // 3

delete Math.sum;
console.log(Math.sum); // undefined

// 2 syntaxes possibles pour accéder aux membres d'un objet
console.log(Math.PI); // 3.14.....
console['log'](Math['PI']); // 3.14.....
var prop = 'PI';
console['log'](Math[prop]); // 3.14.....


// Si besoin d'un nouvel ponctuel
// On utilise la syntaxe object literal

var contact = {
  prenom: 'Romain',
  hello: function() {
    return "Je m'appelle " + this.prenom;
  }
};

console.log(contact.hello()); // Je m'appelle Romain

// On peut boucler sur les membres
for (var prop in contact) {
  console.log(prop);
}

// Si besoin récurrent
// On utilise une fonction constructeur
var Coords3d = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var coordsPointA = new Coords3d(10, 20, 30);
console.log(typeof Coords3d); // function
console.log(typeof coordsPointA); // object
console.log(coordsPointA.x); // 10

// Utilisation d'un fonction constructeur avec une closure
// (Mauvaise Pratique)
var Voiture = function(marque) {

  this.getMarque = function() {
    return marque;
  };

  this.setMarque = function(_marque) {
    marque = _marque;
  };
};

var peugeot = new Voiture('Renault');
console.log(peugeot.marque); // undefined
console.log(peugeot.getMarque()); // Renault
peugeot.setMarque('Peugeot');
console.log(peugeot.getMarque()); // Peugeot

var renault = new Voiture('Renault');
console.log(peugeot.getMarque === renault.getMarque); // false


var Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return "Je m'appelle " + this.prenom;
};

var romain = new Contact('Romain');
console.log(romain.prenom); // (dans l'objet)
console.log(romain instanceof Contact); // true
console.log(romain.hello()); // (dans le proto de Contact)
console.lgo(romain.hasOwnProperty('prenom')); // true
console.lgo(romain.hasOwnProperty('hello')); // false
console.lgo(romain.toto); // undefined
var jean = new Contact('Jean');
console.log(romain.hello === jean.hello); // true
