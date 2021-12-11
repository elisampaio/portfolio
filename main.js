console.log('Hello World!');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("nav").css({'top': '0', 'transition-property': 'top', 'transition-duration': '0.5s'});

  } else {
    $("nav").css({'top': '-17vw', 'transition-property': 'top', 'transition-duration': '0.5s'});
  }
  prevScrollpos = currentScrollPos;
}

//SHOW EMAIL
function show() {
  $('.hide').toggle();
}

$('#email').on('click', show);


// MOBILE MENU BAR
$(document).on('click', '.menu', function() {
  var clicks = $('.menu').data('clicks');

  if (clicks) {
    $(".nav-items").css({'height': '0%', 'opacity': '0'});

    if ($(window).width() < 600) {
      $(".menu").css({'position': 'absolute', 'bottom': '3vw', 'right': '6vw'});

    // media querie +600px
    } else if ($(window).width() > 600) {
      $(".menu").css({'position': 'absolute', 'bottom': '1.7vw', 'right': '4vw'});
    } else {};



  } else {
    $(".nav-items").css({'height': '100%', 'opacity': '100'});

    if ($(window).width() < 600) {
      $(".menu").css({'position': 'fixed', 'top': '9.3vw', 'right': '6vw'});

// media querie +600px
    } else if ($(window).width() > 600) {
      $(".menu").css({'position': 'fixed', 'top': '6vw', 'right': '4vw'});
      console.log('screen bigger than 600px');
// media querie +992px
} else if ($(window).width() > 992) {
          $(".menu").css({'position': 'fixed', 'top': '6vw', 'right': '4vw'});
          console.log('screen bigger than 600px');
        } else {};
  }
  $(this).data("clicks", !clicks);
});

// HIDE MENU BAR -- AFTER NAVIGATION CHOICE
$('.nav-items').children('ul').click( function() {
  $(".nav-items").css({'height': '0%', 'opacity': '0'});

  if ($(window).width() < 600) {
    $(".menu").css({'position': 'absolute', 'bottom': '3vw', 'right': '6vw'});

// media querie +600px
  } else if ($(window).width() > 600) {
    $(".menu").css({'position': 'absolute', 'bottom': '1.7vw', 'right': '4vw'});
    console.log('screen bigger than 600px');
  } else {};

});

//PROJECTS HIDE AND SHOW
//ALL
$(document).on('click', '#all', function() {
  $('#web1').css({'display': 'block'});
  $('#web2').css({'display': 'block'});
  $('#3d1').css({'display': 'block'});
  $('#editorial1').css({'display': 'block'});
  $('#branding1').css({'display': 'block'});
});

//WEB
$(document).on('click', '#web', function() {
  $('#web1').css({'display': 'block'});
  $('#web2').css({'display': 'block'});
  $('#3d1').css({'display': 'none'});
  $('#editorial1').css({'display': 'none'});
  $('#branding1').css({'display': 'none'});
});

//3D
$(document).on('click', '#3d', function() {
  $('#web1').css({'display': 'none'});
  $('#web2').css({'display': 'none'});
  $('#3d1').css({'display': 'block'});
  $('#editorial1').css({'display': 'none'});
  $('#branding1').css({'display': 'none'});
});

//BRANDING
$(document).on('click', '#branding', function() {
  $('#web1').css({'display': 'none'});
  $('#web2').css({'display': 'block'});
  $('#3d1').css({'display': 'none'});
  $('#editorial1').css({'display': 'none'});
  $('#branding1').css({'display': 'block'});
});

//EDITORIAL
$(document).on('click', '#editorial', function() {
  $('#web1').css({'display': 'none'});
  $('#web2').css({'display': 'none'});
  $('#3d1').css({'display': 'none'});
  $('#editorial1').css({'display': 'block'});
  $('#branding1').css({'display': 'none'});
});
