(function() {

  return {
    events: {
      'app.activated':'doSomething'
    },

    doSomething: function() {
        alert('something');
    }
  };

}());
