// Title: Sum All Numbers in a Range
// URL: https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

function sumAll (arr) {
  var total = 0
  arr.sort(function (a, b) {
    return a - b
  })
  for (var i = arr[0]; i <= arr[1]; i++) {
    total += i
  }
  return total
}
