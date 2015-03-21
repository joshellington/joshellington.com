(function() {
  var getToday, setBg, setBgColor, setNavColors;

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

  setBgColor = function() {
    var date, url;
    url = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22portland%2C%20or%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    date = new Date();
    return $.getJSON(url, function(d) {
      var color, temp;
      temp = d.query.results.channel.item.condition.temp;
      ColorMix.setGradient([
        {
          reference: 0,
          color: {
            red: 0,
            green: 0,
            blue: 255
          }
        }, {
          reference: 5,
          color: {
            red: 64,
            green: 0,
            blue: 191
          }
        }, {
          reference: 10,
          color: {
            red: 128,
            green: 0,
            blue: 128
          }
        }, {
          reference: 15,
          color: {
            red: 191,
            green: 0,
            blue: 64
          }
        }, {
          reference: 23,
          color: {
            red: 255,
            green: 0,
            blue: 0
          }
        }
      ]);
      color = ColorMix.blend(0).toString('rgb');
      return $('body').css('background-color', color);
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
