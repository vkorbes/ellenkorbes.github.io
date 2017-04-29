// Title: Falsy Bouncer
// Prompt: Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// URL: https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer (arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i])
    }
  }
  return result
}
