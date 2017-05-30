
var logClosure = function(msg) {
  // Portée de closure
  // (sauvegardée au moment de l'appel
  // à la fonction externe)
  // Il faut :
  // - 2 fonctions imbriqués
  // - la fonction interne soit "appelable" en
  // dehors (return, via un objet, callback async)
  return function() {
    console.log(msg);
  };
};

var logHello = logClosure('Hello');
console.log(typeof logHello); // function

logHello(); // Hello
logHello(); // Hello
logHello(); // Hello


for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// 3 3 3

for (var i=0; i<3; i++) {
  setTimeout(logClosure(i), 1000);
}
// 0 1 2
