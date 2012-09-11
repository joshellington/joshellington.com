/* Author:

*/



$(function() {
  init();
});


function init() {
  resize();
  get_instagram($('#instagram'));
  setup_maps();
}

function get_instagram(cont) {
  pulse($('#loading'));

  $.getJSON('api/instagram.php', function(d) {
    cont.empty();

    _.each(d, function(elem, index){
      elem.created_time = format_time(elem.created_time);

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
  var res = new Date(_time * 1000);
  return Date.create(res).long();
}

// MAPS

function setup_maps() {
  // google.maps.event.addDomListener(window, 'load', initialize);

  $('a.open-map').live('click', function() {
    var lat = $(this).attr('data-lat'),
        lng = $(this).attr('data-lng'),
        position = $(this).offset(),
        id = $(this).closest('.photo').attr('data-id');

    if (lat && lng)
      loadMap('map-'+id, lat, lng, position);

    return false;
  });
}

function loadMap(id, lat, lng, position) {
  var map;
  
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(lat, lng),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  map = new google.maps.Map(document.getElementById(id), mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map
  });

  log(map);

  $('#'+id).toggle();
}


// UTILITIES
function pulse(obj) {
  if ($(obj).length) {
    $(obj).fadeOut(1200, function() {
      $(obj).delay(600).fadeIn(300, function() {
        pulse(obj);
      });
    });
  }
}