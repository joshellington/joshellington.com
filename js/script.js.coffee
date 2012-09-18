root = exports ? this

root.Shade =
  random: (time = 2000) ->
    setTimeout((->
      $('.shade').each ->
        $(this).css 'color', Colors.rand()

        Shade.random time
    ), time)


$ ->

  init()
  

init = ->
  resizeBorder()

  if ($('body').hasClass('home'))
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

delay = (ms, func) -> setTimeout func, ms