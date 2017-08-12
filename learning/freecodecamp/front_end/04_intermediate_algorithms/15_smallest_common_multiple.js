// Title: Smallest Common Multiple
// URL: https://www.freecodecamp.com/challenges/smallest-common-multiple

function isCommonMultiple (number, array) {
  for (var i = array[0]; i <= array[1]; i++) {
    if (number % i !== 0) {
      return false
    }
  }
  return number
}

function smallestCommons (array) {
  if (array[0] > array[1]) {
    var temp = array[0]
    array[0] = array[1]
    array[1] = temp
  }
  var max = 1
  for (var k = array[0]; k <= array[1]; k++) {
    max *= k
  }
  for (var j = array[1] * (array[1] - 1); j <= max; j += array[1]) {
    var result = isCommonMultiple(j, array)
    if (result !== false) {
      return result
    }
  }
}
