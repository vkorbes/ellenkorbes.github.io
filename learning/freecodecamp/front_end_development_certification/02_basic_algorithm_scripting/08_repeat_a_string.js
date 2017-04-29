// Title: Repeat a string repeat a string
// Prompt: Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
// URL: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes (str, num) {
  var results = ''
  for (var i = num; i > 0; i--) {
    results += str
  }
  return results
}
