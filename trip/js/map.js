// Flickr feed URL:
// https://api.flickr.com/services/rest?api_key=7fc7ff1a5dffdab3ff1de46c076c76df&method=flickr.people.getPhotos&user_id=11711526@N00&per_page=100&content_type=1&extras=geo,date_taken,date_upload,url_l,description&format=json

var api_url = 'http://localhost:3000/points', map, route, markers = [];

// api_url = 'https://thetriptrack.herokuapp.com/points';
api_url = 'data/points.json';

function onTheBike(status) {
  if (status) {
    $('.current-status').hide();
    $('#riding').show();
  } else {
    $('.current-status').hide();
    $('#resting').show();
  }
}

function init() {
  $('#map').height($(window).height());

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    clickableIcons: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    // gestureHandling: 'cooperative',
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    styles: MAP_STYLES
  });

  $.getJSON(api_url, function(d) {
    processData(d, function(d) {
      route = new google.maps.Polyline({
        path: d,
        geodesic: true,
        clickable: false,
        strokeColor: '#111',
        strokeWeight: 5,
        strokeOpacity: 0.75
      });

      route.setMap(map);

      // route.addListener('click', function(e) {
      //   console.log(e);
      //   console.log(e.latLng.lat(), e.latLng.lng());
      // });

      setLastPoint(_.last(d));
      setDayPoints(d);
    });
  });

  setPhotos();
}

function processData(data, cb) {
  _.each(data, function(item, i) {
    item.tracked_at_moment = moment(item.tracked_at);
    item.lat = parseFloat(item.lat);
    item.lng = parseFloat(item.lng);

    if (i === data.length - 1) {
      data = _.sortBy(data, function(item) {
        return item.tracked_at_moment.unix();
      });

      data = _.filter(data, function(item) {
        return !item.hidden;
      });

      // data = _.reject(data, function(item) {
      //   return _.filter(data, function(otherItem) {
      //     return item.id !== otherItem.id && Math.abs(item.lat - otherItem.lat) < 0.001 && Math.abs(item.lng - otherItem.lng) < 0.001;
      //   }).length;
      // });

      cb(data);
    }
  });
}

function buildMarker(item, icon, template) {
  var infoWindowContent;

  if (!template) {
    infoWindowContent = '<span>' + item.tracked_at_moment.format('MM/DD/YY HH:mm:ss') + '</span>' +
      '<span><a target="_blank" href="https://google.com/maps?q='+item.lat+','+item.lng+'">' +
      item.lat + ', ' + item.lng + '</a></span>';
  } else {
    var html = _.template($(template).html());
    infoWindowContent = html({item: item});
  }
  
  var infowindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });
  var location = new google.maps.LatLng(item.lat, item.lng);

  var marker = new google.maps.Marker({
    position: location,
    icon: icon,
    map: map
  });

  var geocoder = new google.maps.Geocoder();

  marker.addListener('click', function() {
    if (marker.isGeocoded) {
      infowindow.open(map, marker);
    } else {
      geocoder.geocode({'location': location}, function(results, status) {
        infowindow.setContent(infowindow.getContent() + '<span class="formatted-address">' + results[0].formatted_address + '</span>');
        infowindow.open(map, marker);
        marker.isGeocoded = true;
        // $.getJSON('https://api.open-elevation.com/api/v1/lookup?locations='+item.lat+','+item.lng, function(res) {
          // infowindow.setContent(infowindow.getContent() + '<span class="elevation">'+Math.round(parseInt(res.results[0].elevation) * 3.28084)+'ft</span><span class="formatted-address">' + results[0].formatted_address + '</span>');
        // });
      });
    }
  });

  return marker;
}

function setLastPoint(item) {
  var iconColor = '#E43A19';
  
  if (moment().diff(item.tracked_at_moment, 'hours') < 1) {
    onTheBike(true);
    iconColor = '#1E6A19';
  } else {
    onTheBike(false);
  }

  var icon = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 12,
    fillOpacity: 1,
    fillColor: iconColor,
    strokeColor: '#FFF',
    strokeWeight: 5,
    strokeOpacity: 0.5
  };

  getCurrentWeather(item, function(item) {
    getCurrentElevation(item, function(item) {
      var marker = buildMarker(item, icon, '#currentPoint');
      map.setCenter(marker.position);

      setTimeout(function() {
        marker.setAnimation(google.maps.Animation.DROP);
        // new google.maps.event.trigger(marker, 'click');
      }, 1000);

      $('#last-update').text(item.tracked_at_moment.format('MM/DD/YY HH:mm:ss'));
    });
  });
}

function setDayPoints(d) {
  var days = _.groupBy(d, function(p) { return p.tracked_at_moment.format('YYYYMMDD')});
  var lastPoints = _.map(days, function(day) { return _.last(day); });
  lastPoints.pop();
  
  _.each(lastPoints, function(item) {
    var icon = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 12,
      fillOpacity: 0.75,
      fillColor: '#111',
      strokeColor: '#FFF',
      strokeWeight: 5,
      strokeOpacity: 0.5,
      zIndex: 2
    };
    var marker = buildMarker(item, icon, '#pastPoint');
  });
}

function setPhotos() {
  $.getJSON('data/photos.json', function(d) {
    _.each(d, function(item, i) {
      if (item.lat && item.lng) {
        var location = new google.maps.LatLng(item.lat, item.lng);

        var image = {
          url: 'https://ay7lf17cn.cloudimg.io/crop/32x32/x/'+item.photos[0],
          size: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };

        var marker = new google.maps.Marker({
          position: location,
          icon: image,
          zIndex: 1,
          map: map
        });

        marker.addListener('click', function() {
          window.open(item.link);
        });

        markers.push(marker);

        if (i === d.length - 1) {
          google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            // console.log('set classes!', $('img[src*="rsz"]'));
            console.log('loaded');
            $('img[src*="cloudimg"]').addClass('marker-image');
            $('img[src*="cloudimg"]').parent().addClass('marker-image-container');
          });
        }
      }
    });
  });
}

function getCurrentWeather(item, cb) {
  // var url = 'http://dev.joshellington.com:80/p.php?https://api.darksky.net/forecast/218c6ed155db9d8d6276c59d59323cd0/'+item.lat+','+item.lng;

  // $.getJSON(url, function(d) {
  //   item.currentWeather = d.currently;
  //   cb(item);
  // });

  cb(item);
}

function getCurrentElevation(item, cb) {
  var url = 'https://api.open-elevation.com/api/v1/lookup?locations='+item.lat+','+item.lng;
  $.getJSON(url, function(d) {
    item.currentElevation = Math.round(d.results[0].elevation * 3.28084);
    cb(item);
  });
}