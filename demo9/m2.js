(function(root) {
  var m2 = {
    init: function(inputcb) {
      var me = this;

      document.querySelector('.m2 input').addEventListener('input', function() {
        m2.m2input = this.value;
        m2.emit('change', this.value);
      })
    },

    update: function(val) {
      document.querySelector('.m2 span').innerHTML = val;
    }
  }

  Object.setPrototypeOf(m2, root.EventEmitter);

  root.m2 = m2;
})(window)
