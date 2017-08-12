// Title: Wherefore art thou
// URL: https://www.freecodecamp.com/challenges/wherefore-art-thou

function whatIsInAName (collection, source) {
  var arr = []
  collection.forEach(function (entry) {
    for (var prop in source) {
      if ((!(prop in entry)) || (source[prop] !== entry[prop])) return
    }
    arr.push(entry)
  })
  return arr
}
