// Title: Find the Longest Word in a String
// Prompt: Return the length of the longest word in the provided sentence.
// URL: https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord (str) {
  var wordArray = str.split(' ')
  var theLongest = 0

  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > theLongest) {
      theLongest = wordArray[i].length
    }
  }
  return theLongest
}
