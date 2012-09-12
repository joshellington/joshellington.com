


_.templateSettings.interpolate = /\{\{(.+?)\}\}/g

api_url = 'http://joshellington.tumblr.com/api/read/json'

$ ->
  parse(api_url, $('#main'))

parse = (url, cont) ->

  $.ajax
    url: url
    dataType: 'jsonp'
    data:
      api_key: 'ALTYK1FcaIeXBJ0T9Ro5nHdYeGA7rHhJtQg39ZCkLtNzwlNJfp'
    success: (d) ->
      _.each d.posts, (item,i) ->
        template = _.template($('script#blog-entry').html())

        log(item)

        item =
          title: item['regular-title']
          url: item['url']
          date: Date.create(item['date-gmt']).short()
          content: item['regular-body']
          id: item['id']

        cont.html(template(item))