(function() {
  var delay, init, resizeBorder, setBg, switchBorder;

  $(function() {
    return init();
  });

  init = function() {
    setBg();
    return $(window).resize(resizeBorder);
  };

  setBg = function() {
    var background, url;
    url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?';
    background = $('#background');
    return $.getJSON(url, function(d) {
      var post;
      post = _.sample(d.response.posts);
      return background.css('background-image', 'url(' + post.photos[0].original_size.url + ')');
    });
  };

  switchBorder = function() {
    var as, body, newcolor;
    body = $('body');
    as = $('a');
    newcolor = Colors.rand();
    body.css('border-color', newcolor);
    return as.css('color', newcolor);
  };

  resizeBorder = function() {
    var body, height;
    body = $('body');
    height = window.innerHeight - parseInt(body.css('padding')) * 2;
    body.css('min-height', height);
    return $(window).resize(function() {
      return body.css('min-height', height);
    });
  };

  delay = function(ms, func) {
    return setTimeout(func, ms);
  };

}).call(this);
