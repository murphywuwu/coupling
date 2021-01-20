(function(root) {
  root.data = {
    m1input: '',
    m2input: ''
  };

  var dep = {
    m1input: m2.update,
    m2input: m1.update
  }

  Object.keys(root.data).forEach(key => {
    let val = '';

    Object.defineProperty(data, key, {
      get: function getter() {
        return val;   
      },
      set: function setter(newVal){
        val = newVal;

        dep[key]();
      }
    })
  });
  
  m1.init();
  m2.init();
})(window)
