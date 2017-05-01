// Title: DNA Pairing
// URL: https://www.freecodecamp.com/challenges/dna-pairing

function pairElement (str) {
  var element = ['C', 'G', 'T', 'A']
  var reference = ['G', 'C', 'A', 'T']
  var output = []

  for (var i = 0; i < str.length; i++) {
    if (element.indexOf(str.charAt(i)) === -1) {
      return "Something in there shouldn't be there."
    }
  }

  while (str.length !== 0) {
    output.push([str.charAt(), reference[element.indexOf(str.charAt())]])
    str = str.substr(1)
  }
  return output
}
