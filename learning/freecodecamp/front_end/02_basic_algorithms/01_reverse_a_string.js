// Title: Reverse a String
// Prompt: Reverse the provided string.
// URL: https://www.freecodecamp.com/challenges/reverse-a-string

function reverseString (str) {
  var inverse = ''
  for (var i = 0; i < str.length; i++) {
    inverse = str[i] + inverse
  }
  return inverse
}
