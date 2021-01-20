(function(root) {
  var m2 = {
    init: function(inputcb) {
      var me = this;

      document.querySelector('.m2 input').addEventListener('input', function() {
        data.m2input = this.value;
      })
    },

    update: function() {
      document.querySelector('.m2 span').innerHTML = data.m1input;
    }
  }

  root.m2 = m2;
})(window)
