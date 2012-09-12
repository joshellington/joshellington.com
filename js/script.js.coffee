

$ ->

  init()

init = ->
  setTimeout(switchBorder, 3000)
  resizeBorder()

switchBorder = ->
  body = $('body')
  as = $('a')
  newcolor = Colors.rand()

  body.css('border-color', newcolor)
  as.css('color', newcolor)

resizeBorder = ->
  body = $('body')

  body.css('min-height', window.innerHeight - 160+'px')

  $(window).resize ->
    body.css('min-height', window.innerHeight - 160+'px')