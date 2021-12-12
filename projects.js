console.log('Hello World!');


// when the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    $("nav").css({'top': '0', 'transition-property': 'top', 'transition-duration': '0.3s'});

  } else {
    $("nav").css({'top': '-17vw', 'transition-property': 'top', 'transition-duration': '0.3s'});
  }
  prevScrollpos = currentScrollPos;
}

// change color on scroll
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
      $('main').css({'background': 'black', 'color': '#F2F2F2', 'transition': 'background 0.5s'});
      $('.text').css({'font-weight': '300'});
      $('.box').css({'color': 'black'});
      $('.local-nav').children('a').css({'color': '#F2F2F2'});
      $('.infos').css({'font-weight': '200'});

      } else {
      $('main').css({'background': '#F2F2F2', 'color': '#333333'});
      $('.text').css({'font-weight': '400'});
      $('.local-nav').children('a').css({'color': '#333333'});
      $('.infos').css({'font-weight': '300'});
      $('.box').css({'color': '#333333'});
      }
   });
});

// toggle email
function show() {
  $('.hide').toggle();
}

$('#email').on('click', show);

// mobile menu bar
$(document).on('click', '.menu', function() {
  var clicks = $('.menu').data('clicks');

  if (clicks) {
    $(".nav-items").css({'height': '0%', 'opacity': '0'});

  } else {
    $(".nav-items").css({'height': '100%', 'opacity': '100'});
  }
  $(this).data("clicks", !clicks);
});


// hide menu bar -- after navigation choice
$('.nav-items').children('ul').click( function() {
  $(".nav-items").css({'height': '0%', 'opacity': '0'});

  if ($(window).width() < 600) {
  $(".menu").css({'position': 'absolute', 'bottom': '3vw', 'right': '6vw'});

// media querie +600px
} else if (plus600) {
  $(".menu").css({'position': 'absolute', 'bottom': '1.7vw', 'right': '4vw'});
  console.log('screen bigger than 600px');
} else {};

});
