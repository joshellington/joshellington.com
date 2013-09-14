
$ ->

  init()
  

init = ->
  resizeBorder()
  $(window).resize(resizeBorder)

  # if ($('body').hasClass('home'))
    # setInterval(switchBorder, 5000)

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