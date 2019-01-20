$(function() {
  var mouse_x = getRandomInt(150, 300);
  var mouse_y = getRandomInt(20, 120);

  $('td span').on('mousemove', function(e) {
    console.log(e);
    var ele = $(e.target);
    var image = 'img/'+ele.text().toLowerCase()+'.jpg';
    $('#hover').html('<img src="'+image+'">').css('top', e.clientY - mouse_y).css('left', e.clientX + mouse_x);
  }).on('mouseleave', function(e) {
    $('#hover').empty();
    mouse_x = getRandomInt(150, 300);
    mouse_y = getRandomInt(20, 120);
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}