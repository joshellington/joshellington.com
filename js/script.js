(function() {
  var getToday, setBg, setNavColors;

  $(function() {
    setBg();
    getToday();
    $('.container').addClass('anim-in');
    $('.open').click(function(e) {
      var section;
      section = $(e.currentTarget).attr('href');
      $(e.currentTarget).hide(0, function() {
        return $(section).show();
      });
      return e.preventDefault();
    });
    $(document).pjax('a', '#pjax-container');
    NProgress.configure({
      showSpinner: false
    });
    $(document).on('pjax:clicked', function() {
      console.log('pjax clicked');
      return NProgress.start();
    });
    $(document).on('pjax:complete', function() {
      $('.container').addClass('anim-in');
      return NProgress.done();
    });
    return $(document).on('pjax:end', function() {});
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

  getToday = function() {
    var url;
    url = 'http://api.tumblr.com/v2/blog/whatjoshisdoingtoday.tumblr.com/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=text&callback=?';
    return $.getJSON(url, function(d) {
      var current_day, dd, last_posted_day, od, post, text;
      console.log(d);
      post = d.response.posts[0];
      dd = new Date();
      current_day = dd.getDate();
      od = new Date(0);
      od.setUTCSeconds(post.timestamp);
      last_posted_day = od.getDate();
      console.log(current_day, last_posted_day);
      if (current_day === last_posted_day) {
        text = $(post.body).text();
      } else {
        text = "Haven't posted anything today. Stay tuned.";
      }
      return $('#current-status-text').typed({
        showCursor: false,
        strings: [text]
      });
    });
  };

}).call(this);
