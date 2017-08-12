// this helped tons: https://inventwithpython.com/chapter10.html

$('span').css('borderColor', 'grey')

var playerIs
var computerIs

$('#iamx').click(function () {
  if (!playerIs) {
    playerIs = 'x'
    computerIs = 'o'
    $('span').css('borderColor', 'black')
    $('#choose').css('color', 'grey')
    $('#iamo').css('color', 'grey')
    $('.game').css('color', 'black')
    resetBoard()
  }
})

$('#iamo').click(function () {
  if (!playerIs) {
    playerIs = 'o'
    computerIs = 'x'
    $('span').css('borderColor', 'black')
    $('#choose').css('color', 'grey')
    $('#iamx').css('color', 'grey')
    $('.game').css('color', 'black')
    resetBoard()
  }
})

function resetBoard () {
  theBoard.forEach(function (item, index) {
    theBoard[index][1] = 0
    $('#' + theBoard[index][0]).html('&nbsp;')
    $('#info').text('')
  })
}

$('#oneOne').click(function () {
  if ((playerIs) && ($('#oneOne').html() == '&nbsp;')) {
    $('#oneOne').text(playerIs)
    theBoard[0][1] = playerIs
    go()
  }
})

$('#oneTwo').click(function () {
  if ((playerIs) && ($('#oneTwo').html() == '&nbsp;')) {
    $('#oneTwo').text(playerIs)
    theBoard[1][1] = playerIs
    go()
  }
})

$('#oneThree').click(function () {
  if ((playerIs) && ($('#oneThree').html() == '&nbsp;')) {
    $('#oneThree').text(playerIs)
    theBoard[2][1] = playerIs
    go()
  }
})

$('#twoOne').click(function () {
  if ((playerIs) && ($('#twoOne').html() == '&nbsp;')) {
    $('#twoOne').text(playerIs)
    theBoard[3][1] = playerIs
    go()
  }
})

$('#twoTwo').click(function () {
  if ((playerIs) && ($('#twoTwo').html() == '&nbsp;')) {
    $('#twoTwo').text(playerIs)
    theBoard[4][1] = playerIs
    go()
  }
})

$('#twoThree').click(function () {
  if ((playerIs) && ($('#twoThree').html() == '&nbsp;')) {
    $('#twoThree').text(playerIs)
    theBoard[5][1] = playerIs
    go()
  }
})

$('#threeOne').click(function () {
  if ((playerIs) && ($('#threeOne').html() == '&nbsp;')) {
    $('#threeOne').text(playerIs)
    theBoard[6][1] = playerIs
    go()
  }
})

$('#threeTwo').click(function () {
  if ((playerIs) && ($('#threeTwo').html() == '&nbsp;')) {
    $('#threeTwo').text(playerIs)
    theBoard[7][1] = playerIs
    go()
  }
})

$('#threeThree').click(function () {
  if ((playerIs) && ($('#threeThree').html() == '&nbsp;')) {
    $('#threeThree').text(playerIs)
    theBoard[8][1] = playerIs
    go()
  }
})
                                      // index:
var theBoard = [['oneOne', 0],        // 0
                ['oneTwo', 0],        // 1
                ['oneThree', 0],      // 2
                ['twoOne', 0],        // 3
                ['twoTwo', 0],        // 4
                ['twoThree', 0],      // 5
                ['threeOne', 0],      // 6
                ['threeTwo', 0],      // 7
                ['threeThree', 0]]   // 8

/* 0 || 1 || 2
  =============
   3 || 4 || 5
  =============
   6 || 7 || 8 */

var winningConditions = [[0, 1, 2],   // 0: top row
                         [3, 4, 5],   // 1: middle row
                         [6, 7, 8],   // 2: bottom row
                         [0, 3, 6],   // 3: first column
                         [1, 4, 7],   // 4: middle column
                         [2, 5, 8],   // 5: third column
                         [0, 4, 8],   // 6: diagonal
                         [2, 4, 6]]  // 7: diagonal

var corners = [0, 2, 6, 8],
  middle = [4],
  sides = [1, 3, 5, 7]

function isThereWinner (board) {
  var output = false
  winningConditions.forEach(function (condition, index) {
    if ((board[condition[0]][1] != 0) &&
        (board[condition[0]][1] == board[condition[1]][1]) &&
        (board[condition[0]][1] == board[condition[2]][1])) { output = board[condition[0]][1] }
  })
  return output
}

function freeMoves (board) {
  var output = []
  board.forEach(function (value, index) {
    if (value[1] == 0) { output.push(index) }
  })
  return output.length ? output : false
}

function winningMoveNext (board, player) {
  var output = false
  var tryThis = freeMoves(board)
  if (!tryThis) return false
  tryThis.forEach(function (value, index) {
    var initialValue = board[value][1]
    board[value][1] = player
    if (isThereWinner(board)) { output = value }
    board[value][1] = initialValue
  })
  return output
}

function isAvailable (list, board) {
  var output = []
  var weAreFree = freeMoves(board)
  if (!weAreFree) return false
  list.forEach(function (value) {
    if (weAreFree.indexOf(value) != -1) { output.push(value) }
  })
  return (output.length ? output : false)
}

function go () {
  if (isThereWinner(theBoard) == playerIs) {
    $('#info').text('You won.')
    endGame()
    return
  }

  if (isThereWinner(theBoard) == computerIs) { youLost(); return }

  if (!freeMoves(theBoard)) {
    $('#info').text('Draw.')
    endGame()
  }

  if (winningMoveNext(theBoard, computerIs) !== false) {
    $('#' + theBoard[winningMoveNext(theBoard, computerIs)][0]).text(computerIs)
    theBoard[winningMoveNext(theBoard, computerIs)][1] = computerIs
    if (isThereWinner(theBoard) == computerIs) youLost()
    return
  }

  if (winningMoveNext(theBoard, playerIs) !== false) {
    $('#' + theBoard[winningMoveNext(theBoard, playerIs)][0]).text(computerIs)
    theBoard[winningMoveNext(theBoard, playerIs)][1] = computerIs
    if (isThereWinner(theBoard) == computerIs) youLost()
    return
  }

  if (!isAvailable(middle, theBoard)) {
  } else {
    $('#' + theBoard[isAvailable(middle, theBoard)][0]).text(computerIs)
    theBoard[isAvailable(middle, theBoard)][1] = computerIs
    return
  }

  if ((isAvailable(corners, theBoard))) {
    var items = isAvailable(corners, theBoard)
    var item = items[Math.floor(Math.random() * items.length)]
    $('#' + theBoard[item][0]).text(computerIs)
    theBoard[item][1] = computerIs
    return
  }

  if ((isAvailable(sides, theBoard))) {
    var items = isAvailable(sides, theBoard)
    var item = items[Math.floor(Math.random() * items.length)]
    $('#' + theBoard[item][0]).text(computerIs)
    theBoard[item][1] = computerIs
    return
  }

  if (isThereWinner(theBoard) == computerIs) youLost()
}

function youLost () {
  $('#info').text('You lost, dumbass.')
  endGame()
}

function endGame () {
  playerIs = ''
  $('span').css('borderColor', 'grey')
  $('#choose').css('color', 'black')
  $('#iamx').css('color', 'black')
  $('#iamo').css('color', 'black')
  $('.game').css('color', 'grey')
}
