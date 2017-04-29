// Title: Confirm the Ending
// Prompt: Check if a string (first argument, str) ends with the given target string (second argument, target).
// URL: https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding (str, target) {
  var compare = ''
  for (var i = target.length; i > 0; i--) {
    compare += str[str.length - i]
  }
  if (compare === target) {
    return true
  }
  return false
}
