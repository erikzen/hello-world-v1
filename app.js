(function() {
  return {
    events: {
      'app.activated':'renderDefault'
    },
    renderDefault: function() {
        var currentUser = this.currentUser().name();
        this.switchTo('hello', {
            username: currentUser
        });
    }
  };
}());
