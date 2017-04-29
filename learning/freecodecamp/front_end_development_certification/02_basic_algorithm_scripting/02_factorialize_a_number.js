// Title: Factorialize a Number
// Prompt: Return the factorial of the provided integer.
// URL: https://www.freecodecamp.com/challenges/factorialize-a-number

function factorialize (num) {
  var boom = 1
  for (var i = 1; i <= num; i++) {
    boom *= i
  }
  return boom
}
