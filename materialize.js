// Navigation Bar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

// Carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});

// Feature Discovery
document.addEventListener('DOMContentLoaded', function() {
  const elem = document.querySelector('.tap-target');
  const instance = M.TapTarget.init(elem);

  const menuButton = document.getElementById('menu');
  menuButton.addEventListener('click', function() {
      if (!instance.isOpen) {
          instance.open();
      } else {
          instance.close();
      }
  });
});

// Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: true
  });
});