$(document).ready(function() {

  var tweetquote = "";
  $("#defaultRadio").prop("checked", true);

  $.getJSON("https://api.icndb.com/jokes/random",
    function(json) {
      $("blockquote").html(json.value.joke);
      tweetquote = json.value.joke;
      $('.tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + json.value.joke);
    });

  $("#refresh").on("click",
    function() {
      if ($('input[name=radioName]:checked', '#myForm').val() == 1) {
        $.getJSON("https://api.icndb.com/jokes/random",
          function(json) {
            $("blockquote").html(json.value.joke);
            tweetquote = json.value.joke;
            $('.tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + json.value.joke);
          });
      } else {
        $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes",
          function(json) {
            $("blockquote").html("\"\" + json + \"\" — Ron Swanson\");
              tweetquote = \"\"\" + json + \"\" — Ron Swanson\";
              $('.tweetLink').attr('href', 'https://twitter.com/intent/tweet?text=' + \"\"\" + json + \"\" — Ron Swanson\"); }); } });

                $('a#tweetLink').click(
                  function() {
                    window.open('https://twitter.com/intent/tweet?text=' + tweetquote, 'Twitter', 'scrollbars=yes,width=650,height=500');
                    return false;
                  });

              });\
            ")\"")
        })
    }
  })
})