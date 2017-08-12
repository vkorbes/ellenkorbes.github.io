// Title: Where do I belong
// Prompt: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// URL: https://www.freecodecamp.com/challenges/where-do-i-belong

function comp (a, b) {
  return a - b
}

function getIndexToIns (arr, num) {
  arr.sort(comp)
  if (arr.indexOf(num) !== -1) {
    return arr.indexOf(num)
  }
  arr.push(num)
  arr.sort(comp)
  return arr.indexOf(num)
}
