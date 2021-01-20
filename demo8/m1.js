(function(root){
  var m1 = {
    init: function(inputcb) {
      
      document.querySelector('.m1 input').addEventListener('input', function() {
        data.m1input = this.value;
      });
    },
    update: function() {
      document.querySelector('.m1 span').innerHTML = data.m2input;
    }
  }

  root.m1 = m1;
})(window)