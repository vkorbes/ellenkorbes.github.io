// Title: Chunky Monkey
// Prompt: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// URL: https://www.freecodecamp.com/challenges/chunky-monkey

function chunkArrayInGroups (arr, size) {
  var result = []
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
