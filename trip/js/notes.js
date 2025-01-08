var api_url = 'https://thetriptrack.herokuapp.com/notes';

api_url = 'data/notes.json';

$(function() {
  $.getJSON(api_url, function(d) {
    var cont = $('#notes');

    if (!d.length) {cont.text('Nothing here yet.')}

    d = _.sortBy(d, function(item) {
      return moment(item.date).unix();
    });

    $.each(d, function(i, item) {
      var note = $('<div class="note"></div>');
      note.append('<div class="date">' + item.title + '</div>');

      // ^([01]\d|2[0-3]):?([0-5]\d)$
      times = item.body.match(/^([01]\d|2[0-3]):?([0-5]\d)$/);
      // console.log(times);
      
      note.append('<div class="content">' + item.body + '</div>');

      cont.append(note);

      if (i === d.length - 1) {
        $('.note').not(':first').addClass('old');
        $('.note .date').click(function() {
          $(this).parent().toggleClass('old');
        });
      }
    });
  });
});