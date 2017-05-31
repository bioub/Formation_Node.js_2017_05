'use strict';

var nbs = [1, 3, 8];

var sum = nbs.reduce(function(acc, nb) {
  return acc + nb;
}, 0);

console.log(sum); // 12



