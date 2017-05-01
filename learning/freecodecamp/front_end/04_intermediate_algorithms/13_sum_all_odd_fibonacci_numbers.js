// Title: Sum All Odd Fibonacci Numbers
// URL: https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

function sumFibs (num) {
  var total = 0
  var number1 = 1
  var number2 = 0
  var odds = 1
  while (total < num) {
    total = number1 + number2
    number2 = number1
    number1 = total
    if ((total <= num) && (total % 2 !== 0)) {
      odds += total
    }
  }
  return odds
}
