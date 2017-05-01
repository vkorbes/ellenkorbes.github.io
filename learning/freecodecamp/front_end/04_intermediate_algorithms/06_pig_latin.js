// Title: Pig Latin
// URL: https://www.freecodecamp.com/challenges/pig-latin

function translatePigLatin (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < vowels.length; i++) {
    if (str.charAt() === vowels[i]) {
      return str + 'way'
    }
  }
  while (vowels.indexOf(str.charAt()) === -1) {
    str = str.substr(1) + str.substr(0, 1)
  }
  return str + 'ay'
}
