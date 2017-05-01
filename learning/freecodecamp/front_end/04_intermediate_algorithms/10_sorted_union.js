// Title: Sorted Union
// URL: https://www.freecodecamp.com/challenges/sorted-union

function uniteUnique () {
  var input = [].concat.apply([], arguments)
  var output = input.reduce(
    function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [])
  return output
}
