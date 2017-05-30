
var getRand = function() {
  return Math.random();
};

for (var i=0; i<10; i++) {
  var nb = getRand();

  if (nb > 0.5) {
    console.log(nb);
  }

}
