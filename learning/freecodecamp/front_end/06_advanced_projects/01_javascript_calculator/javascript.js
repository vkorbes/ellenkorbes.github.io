$(document).ready(function () {
  var expression = ''

  function buttonPress (key) {
    $('#results').append(key)
  }

  $('#n1').click(function () {
    buttonPress('1')
  })

  $('#n2').click(function () {
    buttonPress('2')
  })

  $('#n3').click(function () {
    buttonPress('3')
  })

  $('#n4').click(function () {
    buttonPress('4')
  })

  $('#n5').click(function () {
    buttonPress('5')
  })

  $('#n6').click(function () {
    buttonPress('6')
  })

  $('#n7').click(function () {
    buttonPress('7')
  })

  $('#n8').click(function () {
    buttonPress('8')
  })

  $('#n9').click(function () {
    buttonPress('9')
  })

  $('#n0').click(function () {
    buttonPress('0')
  })

  $('#dot').click(function () {
    buttonPress('.')
  })

  function operatorKey (key) {
    expression += $('#results').text() + key
    if (key == '+') $('#operations').append($('#results').text() + '+')
    if (key == '-') $('#operations').append($('#results').text() + '-')
    if (key == '/') $('#operations').append($('#results').text() + '÷')
    if (key == '*') $('#operations').append($('#results').text() + '×')
    $('#results').text('')
  }

  $('#plus').click(function () { operatorKey('+') })
  $('#minus').click(function () { operatorKey('-') })
  $('#divide').click(function () { operatorKey('/') })
  $('#multiply').click(function () { operatorKey('*') })

  function equalKey () {
    if ($('#results').text() == '') {
      expression = expression.slice(0, expression.length - 1)
      $('#operations').html($('#operations').text().slice(0, $('#operations').text().length - 1) + '=')
      $('#results').text(eval(expression))
      console.log(expression + ' = ' + eval(expression))
      expression = ''
    } else {
      expression += $('#results').text()
      $('#operations').append($('#results').text() + '=')
      $('#results').text(eval(expression))
      console.log(expression + ' = ' + eval(expression))
      expression = ''
    }
  }

  $('#equal').click(function () {
    equalKey()
  })

  $('#ce').click(function () {
    var boop = $('#operations').text()
    if (boop[boop.length - 1] == '=') { $('#operations').text('') }
    $('#results').text('')
  })

  $('#ac').click(function () {
    $('#results').text('')
    $('#operations').text('')
    expression = ''
  })
})
