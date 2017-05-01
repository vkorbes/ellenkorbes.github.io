// Title: Drop It
// URL: https://www.freecodecamp.com/challenges/drop-it

function dropElements (array, func) {
  while (array.length > 0) {
    if (func(array[0]) === false) {
      array.shift()
    } else {
      return array
    }
  }
  return array
}
