$ ->
  setBg()
  # setNavColors()
  
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

setNavColors = ->
  colors = Please.make_color
    greyscale: true
    colors_returned: $('nav h3 a').length

  for color, i in colors
    $('nav h3 a').eq(i).css('color', color)