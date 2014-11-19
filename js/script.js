(function() {
  var setBg, setNavColors;

  $(function() {
    setBg();
    return $('.open').click(function(e) {
      var section;
      section = $(e.currentTarget).attr('href');
      $(e.currentTarget).hide(0, function() {
        return $(section).show();
      });
      return e.preventDefault();
    });
  });

  setBg = function() {
    var background, url;
    url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?';
    background = $('.background');
    return $.getJSON(url, function(d) {
      var post;
      post = d.response.posts[Math.floor(Math.random() * d.response.posts.length)];
      return background.css('background-image', 'url(' + post.photos[0].original_size.url + ')');
    });
  };

  setNavColors = function() {
    var color, colors, i, _i, _len, _results;
    colors = Please.make_color({
      greyscale: true,
      colors_returned: $('nav h3 a').length
    });
    _results = [];
    for (i = _i = 0, _len = colors.length; _i < _len; i = ++_i) {
      color = colors[i];
      _results.push($('nav h3 a').eq(i).css('color', color));
    }
    return _results;
  };

}).call(this);
