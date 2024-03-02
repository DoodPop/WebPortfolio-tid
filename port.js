

  document.addEventListener("DOMContentLoaded", function() {
    var tab = document.getElementById('work');
    var header = document.getElementById('header');
    var tabOffset = header.offsetHeight; 
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= tabOffset) {
        tab.classList.add('fixed');
      } else {
        tab.classList.remove('fixed');
      }
    });
  });
