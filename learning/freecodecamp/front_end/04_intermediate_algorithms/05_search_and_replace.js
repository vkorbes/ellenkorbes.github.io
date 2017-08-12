// Title: Search and Replace
// URL: https://www.freecodecamp.com/challenges/search-and-replace

function myReplace (str, before, after) {
  var array = str.split(' ')
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === before.toLowerCase()) {
      if (array[i].charAt() === array[i].charAt().toLowerCase()) {
        array.splice(i, 1, after)
      } else {
        array.splice(i, 1, after.replace(after.charAt(), after.charAt().toUpperCase()))
      }
    }
  }
  return array.join(' ')
}
