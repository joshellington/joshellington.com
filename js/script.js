/* Author:

*/



$(function() {
  switchBorder();

  $('body').css('min-height', window.innerHeight - 160+'px');

  $(window).resize(function() {
    $('body').css('min-height', window.innerHeight - 160+'px');
  });
});



function switchBorder() {
  var body = $('body'),
      as = $('a'),
      newcolor = Colors.rand();

  body.css('border-color', newcolor);
  as.css('color', newcolor);

  setTimeout('switchBorder()', 3000);
}

function buildSquares() {
  var squares = $('#squares'),
      windowHeight = $(document).height(),
      total = 10,
      i = 0;

  // log(total);
  squares.empty();

  for(i;i<=total;i++) {
    // log(i);
    var square = $('<div class="square"/>').css('background-color', Colors.rand());
    squares.append(square);

    if ( i == total ) {
      setTimeout('build()', 5000);
    }
  }
}