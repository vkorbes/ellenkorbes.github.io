// Title: Return Largest Numbers in Arrays
// Prompt: Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// URL: https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour (array) {
  var result = [0, 0, 0, 0]
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] > result[i]) {
        result[i] = array[i][j]
      }
    }
  }
  return result
}
