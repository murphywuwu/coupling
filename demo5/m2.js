(function(root) {
  var m2 = {
    init: function() {
      var me = this;

      document.querySelector('.m2 input').addEventListener('input', function() {
        me.m2input = this.value;
        m1.update(me);
      })
    },

    update: function(me) {
      document.querySelector('.m2 span').innerHTML = me.m1input;
    }
  }

  root.m2 = m2;
})(window)
