// Title: Check for Palindromes
// Prompt: Return true if the given string is a palindrome. Otherwise, return false.
// URL: https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome (str) {
  var boom = ''
  var pali = ''
  var lengthVar
  var boop
  var newstr = str.toLowerCase().match(/[A-Za-z0-9]+/g)

  for (var i = 0; i < newstr.length; i++) {
    boom += newstr[i]
  }

  if (boom.length % 2 === 0) {
    lengthVar = boom.length / 2
    boop = 1
  } else {
    lengthVar = (boom.length + 1) / 2
    boop = 2
  }

  for (i = 0; i < lengthVar; i++) {
    pali += boom[i]
  }

  for (i = lengthVar - boop; i >= 0; i--) {
    pali += boom[i]
  }

  if (pali === boom) {
    return true
  }

  return false
}
