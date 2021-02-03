(function(root){
  var m1 = {
    init: function() {
      
      document.querySelector('.m1 input').addEventListener('input', function() {
        m1.m1input = this.value;
        m1.emit('change', this.value);
      });
    },
    update: function(val) {
      document.querySelector('.m1 span').innerHTML = val;
    }
  }

  Object.setPrototypeOf(m1, root.EventEmitter);

  root.m1 = m1;
})(window)