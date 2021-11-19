console.log('Hello World!');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("nav").css({'top': '0', 'transition-property': 'top', 'transition-duration': '0.5s'});
    // $('.local-nav > p').html('<p> <span><</span> Projects</p>');

  } else {
    $("nav").css({'top': '-17vh', 'transition-property': 'top', 'transition-duration': '0.5s'});
    // $('.local-nav > p').html('<p> <span><</span></p>');
  }
  prevScrollpos = currentScrollPos;
}
