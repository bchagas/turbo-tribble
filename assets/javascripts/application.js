$(document).ready(function() {
  var controller = $.superscrollorama();
  // individual element tween examples

  var div = $('[data-type=fixed]');

  console.log(div)

  if ( $(div).length >= 1 ) {
    var start = $(div).offset().top;

    $.event.add(window, "scroll", function() {
      var p = $(window).scrollTop();
      $(div).css('position',((p)>start) ? 'fixed' : 'static');
      $(div).css('top',((p)>start) ? '0px' : '');
      $(div)[ ((p)>start) ? 'addClass' : 'removeClass' ]('fixed');
    });
  }

});
