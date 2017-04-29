// Title: Title Case a Sentence
// Prompt: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// URL: https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase (str) {
  var array = str.split(' ')
  var output = ''

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase()
    if (i + 1 === array.length) {
      output += array[i]
    } else {
      output += array[i] + ' '
    }
  }
  return output
}
