// Title: Caesars Cipher
// Prompt: See the link...
// URL: https://www.freecodecamp.com/challenges/caesars-cipher

function rot13 (str) {
  var result = ''
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  for (var i = 0; i < str.length; i++) {
    if (input.indexOf(str[i]) !== -1) {
      result += output[input.indexOf(str[i])]
    } else {
      result += str[i]
    }
  }
  return result
}
