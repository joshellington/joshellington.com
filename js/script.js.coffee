

$ ->

  init()

init = ->
  resizeBorder()
  setInterval(switchBorder, 5000)

switchBorder = ->
  body = $('body')
  as = $('a')
  newcolor = Colors.rand()

  body.css('border-color', newcolor)
  as.css('color', newcolor)

resizeBorder = ->
  body = $('body')
  height = window.innerHeight - 160+'px'

  body.css('min-height', height)

  $(window).resize ->
    body.css('min-height', height)