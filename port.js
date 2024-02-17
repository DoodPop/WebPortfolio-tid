document.addEventListener("DOMContentLoaded", function() {
    var fiddle = document.querySelector('.fiddle');
    var animate = false;
  
    window.addEventListener('scroll', function() {
      var distanceFromTop = fiddle.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
  
      if (distanceFromTop < screenHeight && !animate) {
        fiddle.classList.add('animate');
        animate = tru;
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.foop');
    var fadein = false;
  
    window.addEventListener('scroll', function() {
      var distanceFromTop = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
      
      if (distanceFromTop < screenHeight && !fadein) {
        element.classList.add('fade-in');
        fadein = true;
      }
    });
  });
  
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
  document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.toop');
    var fadein = false;
  
    window.addEventListener('scroll', function() {
      var distanceFromTop = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
      
      if (distanceFromTop < screenHeight && !fadein) {
        element.classList.add('fade-inn');
        fadein = true;
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var fiddle = document.querySelector('.tiddle');
    var animate = false;
  
    window.addEventListener('scroll', function() {
      var distanceFromTop = fiddle.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
  
      if (distanceFromTop < screenHeight && !animate) {
        fiddle.classList.add('animates');
        animate = tru;
      }
    });
  });