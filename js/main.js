$(function() {
  getListening();

  setInterval(function() {
    getListening();
  }, 25000);
});

function getBg() {
  var url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?';
  $.getJSON(url, function(d) {
    var post = d.response.posts[Math.floor(Math.random() * d.response.posts.length)];
    $('body').css('background-image', 'url(' + post.photos[0].original_size.url + ')');
  });
}

function getListening() {
  var url;
  url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joshellington&api_key=bd5217f8dfd32dd746cdc01a703aafd2&format=json';
  return $.getJSON(url, function(d) {
    var image, song, track;
    track = d.recenttracks.track[0];
    if (track.image[0]["#text"] !== '') {
      image = "<a href='" + track.url + "'><img src='" + track.image[0]["#text"] + "'></a> ";
    } else {
      image = '';
    }
    song = "<a href='" + track.url + "'> " + track.name + "</a>";
    $('span#listen').html(song);
  });
}