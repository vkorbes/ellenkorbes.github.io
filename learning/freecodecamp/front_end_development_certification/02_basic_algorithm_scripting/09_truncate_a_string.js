// Title: Truncate a string
// Prompt:
//   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//
//   Note that inserting the three dots to the end will add to the string length.
//
//   However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
//
// URL: https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString (str, num) {
  if (str.length <= num) {
    return str
  }

  var result = ''
  var maxChars = num - 3

  if (num < 3) {
    for (var i = num; i > 0; i--) {
      result = str[i - 1] + result
    }
    return result + '...'
  }

  if (maxChars < 1) {
    maxChars = 1
  }
  for (var j = maxChars; j > 0; j--) {
    result = str[j - 1] + result
  }
  return result + '...'
}
