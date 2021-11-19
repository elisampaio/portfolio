console.log('Hello World!');

// alterar a cor após o scroll
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
       $('main').css({'background': 'black',
       'color': '#F2F2F2',
     	 'transition': 'background 0.5s'});
      $('.local-nav').css({'background': 'black',
        'color': '#F2F2F2', 'transition': 'background 0.5s'});
      $('.text').css({'font-weight': '300'});
      $('.local-nav > p').html('<p> <span><</span></p>');
      $('.local-nav > p > span').css('transform', 'rotate(-90deg)');
      $('.box').css('color', 'black');
      } else {
         $('main').css({'background': '#F2F2F2',
       'color': '#333333'});
       $('.local-nav').css({'background': '#F2F2F2',
         'color': '#333333'});
     $('.text').css({'font-weight': '400'});
     $('.local-nav > p').html('<p> <span><</span> Projects</p>');
      }
   });
});


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("nav").css({'top': '0', 'transition-property': 'top', 'transition-duration': '0.3s'});
    // $('.local-nav > p').html('<p> <span><</span> Projects</p>');

  } else {
    $("nav").css({'top': '-17vh', 'transition-property': 'top', 'transition-duration': '0.3s'});
    // $('.local-nav > p').html('<p> <span><</span></p>');
  }
  prevScrollpos = currentScrollPos;
}
