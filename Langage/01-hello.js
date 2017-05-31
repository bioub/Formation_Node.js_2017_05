'use strict';

/**
 * Génère un nombre aléatoire
 * @returns {number}
 */
var getRand = function() {
  return Math.random();
};

/**
 * Addition 2 nbs
 * @param a {number} Le premier nb
 * @param b {number} Le 2e nb
 * @returns {number}
 */
var sum = function(a, b) {
  return a + b;
};

sum('1', 23);


for (var i=0; i<10; i++) {
  var nb = getRand();

  if (nb > 0.5) {
    console.log(nb);
  }

}
