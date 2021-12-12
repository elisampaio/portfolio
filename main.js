console.log('Hello World!');

// when the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
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

// toggle email
function show() {
  $('.hide').toggle();
}

$('#email').on('click', show);

var w = window.innerWidth;

// mobile menu bar
$(document).on('click', '.menu', function() {
  var clicks = $('.menu').data('clicks');

  if (clicks) {
    $(".nav-items").css({'height': '0%', 'opacity': '0'});
  } else {
    $(".nav-items").css({'height': '100%', 'opacity': '100'});
  };

  $(this).data("clicks", !clicks);
});

// hide menu bar -- after navigation choice
$('.nav-items').children('ul').click( function() {
  $(".nav-items").css({'height': '0%', 'opacity': '0'});
});

//projects hide & show
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
