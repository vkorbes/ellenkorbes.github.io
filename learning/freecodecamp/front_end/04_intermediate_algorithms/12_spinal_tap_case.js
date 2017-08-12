// Title: Spinal Tap Case
// URL: https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase (str) {
  var output = ''
  str = str.replace(/[\s_]/g, '-')
  for (var i = 0; i < str.length; i++) {
    if ((i !== 0) && (str[i].toLowerCase() !== str[i]) && (str[i - 1] !== '-')) {
      output += '-' + str[i]
    } else {
      output += str[i]
    }
  }
  return output.toLowerCase()
}
