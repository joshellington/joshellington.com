(function() {
  var setBg;

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

}).call(this);
