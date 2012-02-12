/* Author:

*/



$(function() {
  build();
});



function build() {
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