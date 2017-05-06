/* HTTPS doesn't work, needs to be HTTP.

   Color scheme inspired by this screengrab from the 1995 masterpiece, Hackers.
   http://mafab.hu/static/2014t/285/03/18246_52.jpg */

$(document).ready(function () {
  $.getJSON('http://ipinfo.io/json', function (json) {
    city = json.city
    loc = json.loc.split(',')
    // console.log(json);
    getWeather(city, loc)
    getMap(loc)
  })

  var water = '162406'
  var land = '15414c'
  var roads = '7e5a8c'

  $('p').css('color', '#3e8c8f')
  $('main').css('background-color', 'rgba(71, 48, 88, 0.8)')
  $('main').css('border-color', '#473058')

  /*
15414c Tiber(Green)
7e5a8c Trendy Pink(Violet)
3e8c8f Blue Chill(Green)
473058 Scarlet Gum(Violet)
3b0d06 Seal Brown(Black)
5a1b10 Red Oxide(Red)
162406 Nero(Black)
812e33 Paprika(Red)
9c5565 Vin Rouge(Red)
*/

  function getWeather (city, loc) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + loc[0] + '&lon=' + loc[1] + '&units=metric&APPID=061f24cf3cde2f60644a8240302983f2',
                 function (json) {
                   $('#location').text(city.toLowerCase())
                   $('#hwBefore').text(json.main.humidity + '% humidity & ')
                   $('#hwSpeed').text(json.wind.speed.toFixed(1) + ' ')
                   $('#KM').text('km/h')
                   $('#hwAfter').text(' wind')
                   $('#tempNum').text(json.main.temp.toFixed(1))
                   $('#CF').text('ºC')
                   $('#description').text(json.weather[0].description)
                   $('#metric').text('metric')
                   $('#imperial').html("<a href='#'>imperial</a>")
                   theTemp = json.main.temp.toFixed(1)
                   theSpeed = json.wind.speed.toFixed(1)
                   $('#picture').html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>")
                 })
  };

  function getMap (loc) {
    $('body').css('background-image', 'url(' + 'http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x640&maptype=roadmap&center=' + loc[0] + ',' + loc[1] + '&style=feature:road%7Celement:all%7Ccolor:0x' + roads + '%7C&&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:administrative%7Celement:labels%7Cvisibility:off&style=feature:poi%7Celement:all%7Cvisibility:off&style=feature:landscape%7Celement:geometry%7Cvisibility:on%7Ccolor:0x' + land + '&style=feature:water%7Celement:geometry%7Ccolor:0x' + water + '&style=feature:all%7Celement:labels%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Cvisibility:off&style=feature:transit.station.airport%7Celement:geometry%7Cvisibility:off&scale=2' + ')')
  };

  $('#imperial').on('click',
    function () {
      $('#metric').html("<a href='#'>metric</a>")
      $('#imperial').text('imperial')
      $('#CF').text('ºF')
      $('#KM').text(' mph')
      // theTemp = $("#tempNum").text();
      // theSpeed = $("#hwSpeed").text();
      // console.log(theSpeed);
      impSpeed = (theSpeed * 0.621371).toFixed(1)
      impTemp = (theTemp * 9 / 5 + 32).toFixed(1)
      // console.log(theSpeed);
      $('#tempNum').text(impTemp)
      $('#hwSpeed').text(impSpeed)
    })

  $('#metric').on('click',
      function () {
        // console.log($("#CF").text());
        $('#metric').text('metric')
        $('#imperial').html("<a href='#'>imperial</a>")
        $('#CF').text('ºC')
        $('#KM').text(' km/h')
        $('#tempNum').text(theTemp)
        $('#hwSpeed').text(theSpeed)
      })
})
