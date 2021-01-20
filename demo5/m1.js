(function(root){
  var m1 = {
    init: function() {
      var me = this;
      
      document.querySelector('.m1 input').addEventListener('input', function() {
        me.m1input = this.value;
        m2.update(me);

      });
    },
    update: function(me) {
      document.querySelector('.m1 span').innerHTML = me.m2input;
    }
  }

  root.m1 = m1;
})(window)