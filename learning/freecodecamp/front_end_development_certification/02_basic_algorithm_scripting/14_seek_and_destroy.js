// Title: Seek and Destroy
// Prompt: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// URL: https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer (arg) {
  var array = []
  for (var i = 0; i < arguments.length; i++) {
    array.push(arguments[i])
  }

  function boom (value) {
    return array.indexOf(value) === -1
  }

  return arg.filter(boom)
}

