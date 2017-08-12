// Title: Binary Agents
// URL: https://www.freecodecamp.com/challenges/binary-agents

function binaryAgent (str) {
  var output = ''
  var array = str.split(' ')
  for (var i = 0; i < array.length; i++) {
    output += String.fromCharCode(parseInt(array[i], 2))
  }
  return output
}
