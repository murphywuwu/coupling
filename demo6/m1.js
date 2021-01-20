(function(root){
  var m1 = {
    init: function() {
      var me = this;
      
      document.querySelector('.m1 input').addEventListener('input', function() {
        me.m1input = this.value;
        m2.update(me.m1input);
      });
    },
    update: function(val) {
      document.querySelector('.m1 span').innerHTML = val;
    }
  }

  root.m1 = m1;
})(window)