// Title: Mutations
// Prompt: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// URL: https://www.freecodecamp.com/challenges/mutations

function mutation (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase()
  }
  for (var j = 0; j < arr[1].length; j++) {
    if (arr[0].indexOf(arr[1][j]) === -1) {
      return false
    }
  }
  return true
}
