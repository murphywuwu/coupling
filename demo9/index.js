(function(root) {
  root.m1.on('change', function(val) {
    m2.update(val)
  })

  root.m2.on('change', function(val) {
    m1.update(val);
  })
  
  m1.init();
  m2.init();
})(window)
