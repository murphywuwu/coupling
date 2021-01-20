(function(root){
  var m1 = {
    init: function() {
      this.m2input = '';
      
      document.querySelector('.m1 input').addEventListener('input', function() {
        root.m1input = this.value;
        m2.update();

        m2.toggle(!!this.value);
      });
    },
    update: function() {
      document.querySelector('.m1 span').innerHTML = root.m2input;
    }
  }

  root.m1 = m1;
})(window)