$('document').ready(function () {
  $('#searchButton').click(function () {
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=' + $('#search').val() + '&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&origin=*', function (json) {
      var html = ''
      var numberOfResults = 0

      $.each(json.query.pages, function (index, value) {
        html += '<div class="result"><hr><a target="_blank" href="https://en.wikipedia.org/?curid=' +
          index +
          '"><p class="title">' +
          value.title +
          '</p></a><p class="text">' +
          value.extract +
          '</p></div>'
        numberOfResults++
      })

      $('.results').html(html)
      $('.info').html('<hr><p class="title">Query: <span class="query">' +
                      $('#search').val() +
                      '</span> Results: <span class="numberResults">' +
                      numberOfResults +
                      '</span></p>')
      $('.topLink').html('<p class="title"><a href="#top">Top</a></p>')
      $('#clearClick').css('visibility', 'visible')
    })
  })

  $('#clearClick').click(function () {
    $('.results').html('')
    $('.info').html('')
    $('.topLink').html('')
    $('#clearClick').css('visibility', 'hidden')
    $('#search').val('')
  })

  $('#search').keypress(function (e) {
    if (e.which == 13) {
      $('#searchButton').click()
    }
  })
})
