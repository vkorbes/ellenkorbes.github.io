// Title: Diff Two Arrays
// URL: https://www.freecodecamp.com/challenges/diff-two-arrays

function difArray (arr1, arr2) {
  var newArr1 = arr1.filter(function (value) {
    if (arr1.indexOf(value) === -1) {
      return value
    }
  })
  var newArr2 = arr2.filter(function (value) {
    if (arr2.indexOf(value) === -1) {
      return value
    }
  })
  return newArr1.concat(newArr2)
}
