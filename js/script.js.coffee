$ ->
  setBg()
  # setBgColor()
  # getToday()
  getListening()

  $('.container').addClass('anim-in')

  $('.open').click (e) ->
    section = $(e.currentTarget).attr('href')
    
    $(e.currentTarget).hide 0, ->
      $(section).show()

    e.preventDefault()

  $(document).pjax('a', '#pjax-container')
  
  NProgress.configure({ showSpinner: false })
  $(document).on 'pjax:clicked', ->
    console.log 'pjax clicked'
    NProgress.start()

  $(document).on 'pjax:complete', ->
    $('.container').addClass('anim-in')
    NProgress.done()

  $(document).on 'pjax:end', ->
    # NProgress.remove()


setBg = ->
  url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?'
  background = $('.background')
  # color = Please.make_color
  # $('body').css('background-color', color)

  $.getJSON url, (d) ->
    post = d.response.posts[Math.floor(Math.random()*d.response.posts.length)]
    background.css('background-image', 'url('+post.photos[0].original_size.url+')')

setBgColor = ->
  url = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22portland%2C%20or%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

  date = new Date()

  $.getJSON url, (d) ->
    temp = d.query.results.channel.item.condition.temp

    ColorMix.setGradient([
      { reference: 0, color: { red: 0, green: 0, blue: 255 } }
      { reference: 5, color: { red: 64, green: 0, blue: 191 } }
      { reference: 10, color: { red: 128, green: 0, blue: 128 } }
      { reference: 15, color: { red: 191, green: 0, blue: 64 } }
      { reference: 23, color: { red: 255, green: 0, blue: 0 } }
    ])

    color = ColorMix.blend(0).toString('rgb')
    $('body').css('background-color', color)

setNavColors = ->
  colors = Please.make_color
    greyscale: true
    colors_returned: $('nav h3 a').length

  for color, i in colors
    $('nav h3 a').eq(i).css('color', color)

getToday = ->
  url = 'http://api.tumblr.com/v2/blog/whatjoshisdoingtoday.tumblr.com/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=text&callback=?'

  $.getJSON url, (d) ->
    # console.log d
    post = d.response.posts[0]

    dd = new Date()
    current_day = dd.getDate()
    od = new Date(0)
    od.setUTCSeconds(post.timestamp)
    last_posted_day = od.getDate()

    console.log current_day, last_posted_day

    if current_day is last_posted_day
      text = $(post.body).text()
    else
      text = "Haven't posted anything today. Stay tuned."

    $('#current-status-text').typed({
      showCursor: false
      strings: [text]
    })

getListening = ->
  url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joshellington&api_key=bd5217f8dfd32dd746cdc01a703aafd2&format=json'
  
  $.getJSON url, (d) ->
    track = d.recenttracks.track[0]

    image = "<a href='" + track.url + "'><img src='" + track.image[0]["#text"] + "'></a> "
    song = track.name + " &mdash; " + track.artist["#text"];
    
    $('#current-status-text span.image').html(image)
    $('#current-status-text span.text').typed({
      showCursor: false
      strings: [song]
    })

