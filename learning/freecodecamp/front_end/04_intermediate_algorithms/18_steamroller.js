// Title: Steamroller
// URL: https://www.freecodecamp.com/challenges/steamroller

function isThereAnArrayInside (array) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      return true
    }
  }
  return false
}

function steamrollArray (array) {
  while (isThereAnArrayInside(array) === true) {
    array = [].concat.apply([], array)
  }
  return array
}
