// Title: Sum All Primes
// URL: https://www.freecodecamp.com/challenges/sum-all-primes

function isPrime (num) {
  for (var j = 2; j <= num; j++) {
    if ((num % j === 0) && (num !== j)) {
      return 0
    }
  }
  return num
}

function sumPrimes (num) {
  var sum = 0
  for (var i = 2; i <= num; i++) {
    sum += isPrime(i)
  }
  return sum
}
