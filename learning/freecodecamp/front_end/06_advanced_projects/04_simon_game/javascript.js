$(document).ready(function () {
// Sounds effects by Felicia Redelaar!

//              dark       bright     id
  var colors = [['#00aa00', '#00ff00', '#one'],    // 0 - green
              ['#aa0000', '#ff0000', '#two'],    // 1 - red
              ['#c8c800', '#ffff00', '#three'],  // 2 - yellow
              ['#0000aa', '#0000ff', '#four']]  // 3 - blue

  var sequence = []
  var listening = false
  var userSequence = []
  var toWin = 20
  var strict = false

  function blink (lightIndex) {
    $('#sound' + lightIndex)[0].play()
    $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][1]}, 25)
    window.setTimeout(function () { $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][0]}, 400) }, 200)
  }

  $('#one').click(function () { if (listening) { go(0) } })
  $('#two').click(function () { if (listening) { go(1) } })
  $('#three').click(function () { if (listening) { go(2) } })
  $('#four').click(function () { if (listening) { go(3) } })

  function randomColor () {
    var boop = Math.floor(Math.random() * colors.length)
    return boop
  }

  function addOne () {
    var nextOne = randomColor()
    sequence.push(nextOne)
    if (sequence.length < 10) {
      $('#display').text('0' + sequence.length)
    } else {
      $('#display').text(sequence.length)
    }
  }

  function playBack () {
    listening = false
    sequence.forEach(function (item, index) {
      window.setTimeout(function () { blink(item) }, index * 800)
      $('#buttonStart').prop('disabled', true)
    })
    window.setTimeout(function () {
      listening = true
      $('#buttonStart').prop('disabled', false)
    }, (sequence.length * 800) + 100)
    console.log(sequence) // !!
  }

  function check () {
    output = true
    userSequence.forEach(function (item, index) {
    // console.log(userSequence + " vs. " + sequence);
      if (userSequence[index] != sequence[index]) {
        output = false
      }
    })
    return output
  }

  function wrong (lightIndex) {
    $('#soundWrong')[0].play()
    $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][1]}, 25)
    window.setTimeout(function () { $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][0]}, 400) }, 200)
    console.log('You dumbass!')
  }

  $('#buttonStart').click(function () {
    console.log('boop')
    $('#buttonStart').text('Restart')
    $('.startlight').css('color', 'red')
    sequence = []
    listening = false
    userSequence = []
    addOne()
    playBack()
  })

  function go (keypress) {
    userSequence.push(keypress)

    if (!check() && (!strict)) {
      listening = false
      wrong(keypress)
      window.setTimeout(playBack, 3000)
      console.log('wrong if')
      userSequence = []
    } else if (!check() && (strict)) {
      sequence = []
      listening = false
      userSequence = []
      wrong(keypress)
      addOne()
      window.setTimeout(playBack, 3000)
    } else { blink(keypress) }

    if ((userSequence[userSequence.length - 1] == sequence[sequence.length - 1]) &&
      (userSequence.length == sequence.length) &&
      (sequence.length < toWin)) {
      listening = false
      addOne()
      window.setTimeout(playBack, 1000)
      console.log('right if')
      userSequence = []
    }

    if ((userSequence[userSequence.length - 1] == sequence[sequence.length - 1]) &&
      (userSequence.length == sequence.length) &&
      (sequence.length = toWin)) {
      listening = false
      window.setTimeout(function () {
        winAnimation()
      }, 1000)
      console.log('boom!')
      userSequence = []
      sequence = 0
    }
  }

  $('#buttonMode').click(function () {
    if (!strict) { $('.strictlight').css('color', 'red'); strict = true } else { $('.strictlight').css('color', 'grey'); strict = false }
  })

  function winAnimation () {
    function blinkWin (lightIndex) {
      $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][1]}, 25)
      window.setTimeout(function () { $(colors[lightIndex][2]).animate({backgroundColor: colors[lightIndex][0]}, 400) }, 200)
    }
    $('#soundWin')[0].play()
    listening = false
    var animation = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0]
    animation.forEach(function (item, index) {
      window.setTimeout(function () { blinkWin(item) }, index * 180)
      $('#buttonStart').prop('disabled', true)
    })
    window.setTimeout(function () {
      listening = true
      $('#buttonStart').prop('disabled', false)
    }, (animation.length * 150) + 100)
  }
})
