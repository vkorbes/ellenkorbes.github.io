// Title: Arguments Optional
// URL: https://www.freecodecamp.com/challenges/arguments-optional

function addTogether (x, y) {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      return undefined
    }
  }
  if (y) {
    return x + y
  }
  return function (z) {
    if (typeof z !== 'number') {
      return undefined
    }
    return x + z
  }
}
