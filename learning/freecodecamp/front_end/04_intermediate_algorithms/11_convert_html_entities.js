// Title: Convert HTML Entities
// URL: https://www.freecodecamp.com/challenges/convert-html-entities

function convertHTML (str) {
  var replaceThese = ['<', '>', "'", '"', '&']
  var replaceWith = ['&lt;', '&gt;', '&apos;', '&quot;', '&amp;']
  var output = ''

  for (var i = 0; i < str.length; i++) {
    if (replaceThese.indexOf(str[i]) !== -1) {
      output = output + replaceWith[replaceThese.indexOf(str[i])]
//      console.log(output)
    } else {
      output = output + str[i]
//      console.log(output)
    }
  }
  return output
}
