// Title: Roman Numeral Converter
// URL: https://www.freecodecamp.com/challenges/roman-numeral-converter

function convertToRoman (num) {
  var roman = ''
  var array1 = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  var array2 = ['M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I']
  while (num !== 0) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] <= num) {
        num = num - array1[i]
        roman += array2[i]
        break
      }
    }
  }
  return roman
}
