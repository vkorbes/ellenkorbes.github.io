// Title: Missing letters
// URL: https://www.freecodecamp.com/challenges/missing-letters

function fearNotLetter (str) {
  for (var i = 0; i < str.length; i++) {
    if (i + 1 === str.length) {
      return undefined
    }
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
  return str
}
