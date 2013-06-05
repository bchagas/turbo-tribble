$(document).ready(function() {
  var div = $('[data-type=fixed]');
  var navigationItems = new Array('A agência', 'O que fazemos', 'Contato');

  if ( $(div).length >= 1 ) {
    var start = $(div).offset().top;

    $.event.add(window, "scroll", function() {
      var p = $(window).scrollTop();
      $(div).css('position',((p)>start) ? 'fixed' : 'static');
      $(div).css('top',((p)>start) ? '0px' : '');
      $(div)[ ((p)>start) ? 'addClass' : 'removeClass' ]('fixed');
    });
  };

  $('#main').pageScroller({
    navigation: navigationItems,
    navigationClass: 'topNav',
    animationSpeed: 750,
    animationType: 'easeOutExpo',
    scrollOffset: 138
  });

  $('.pageScroll').wrap("<div class='header'><div class='content'><nav></nav></div></div>");
  $('.header .content').append('<h1>Food co</h1>');
});
