$ ->
  setBg()

  $('.open').click (e) ->
    section = $(e.currentTarget).attr('href')
    
    $(e.currentTarget).hide 0, ->
      $(section).show()

    e.preventDefault()

setBg = ->
  url = 'http://api.tumblr.com/v2/blog/nos.twnsnd.co/posts?api_key=Zx4n6ownkgGXpLT7ncRmPBgVMfjZFarPaVI7esQEqnrj4AO5qK&type=photo&callback=?'
  background = $('.background')

  $.getJSON url, (d) ->
    post = d.response.posts[Math.floor(Math.random()*d.response.posts.length)]
    background.css('background-image', 'url('+post.photos[0].original_size.url+')')