


var contact = {
  prenom: 'Romain',
  helloAsync: function() {
    setTimeout(() => {
      console.log('Bonjour je m\'appelle ' + this.prenom);
    }, 1000);
  },
};

contact.helloAsync();
