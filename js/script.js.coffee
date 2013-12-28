
$ ->

  init()
  

init = ->
  setBg()
  $(window).resize(resizeBorder)

  # if ($('body').hasClass('home'))
    # setInterval(switchBorder, 5000)

setBg = ->
  url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?'
  background = $('#background')

  $.getJSON url, (d) ->
    post = _.sample(d.response.posts)
    background.css('background-image', 'url('+post.photos[0].original_size.url+')')

switchBorder = ->
  body = $('body')
  as = $('a')
  newcolor = Colors.rand()

  body.css('border-color', newcolor)
  as.css('color', newcolor)

resizeBorder = ->
  body = $('body')
  height = window.innerHeight - parseInt(body.css('padding')) * 2

  body.css('min-height', height)

  $(window).resize ->
    body.css('min-height', height)

delay = (ms, func) -> setTimeout func, ms