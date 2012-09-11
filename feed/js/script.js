/* Author:

*/



$(function() {
  init();
});


function init() {
  resize();
  get_instagram($('#instagram'));
}

function get_instagram(cont) {
  pulse($('#loading'));

  $.getJSON('api/instagram.php', function(d) {
    cont.empty();

    _.each(d.data, function(elem, index){
      elem.created_time = format_time(elem.created_time);
      log(elem.created_time);

      $('#photo-template').tmpl(elem).appendTo(cont);
    });
  });
}

function resize() {
  $('body').css('min-height', window.innerHeight - 160+'px');

  $(window).resize(function() {
    $('body').css('min-height', window.innerHeight - 160+'px');
  }); 
}

function format_time(_time) {
  log(_time);
  var res = new Date(_time * 1000);
  return Date.create(res).long();
}

function loadMap(id, lat, lng) {
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(lat, lng),
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    map = new google.maps.Map(document.getElementById(id), mapOptions);
  };

  google.maps.event.addDomListener(window, 'load', initialize);
}

function pulse(obj) {
  if ($(obj).length) {
    $(obj).fadeOut(1200, function() {
      $(obj).delay(600).fadeIn(300, function() {
        pulse(obj);
      });
    });
  }
}