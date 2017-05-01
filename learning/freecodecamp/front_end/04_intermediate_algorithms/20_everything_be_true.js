// Title: Everything Be True
// URL: https://www.freecodecamp.com/challenges/everything-be-true

function truthCheck (collection, pre) {
  var status = true
  collection.forEach(
    function (item) {
      if ((item.hasOwnProperty(pre) === false) ||
          (Boolean(item[pre]) === false)) {
        status = false
      }
    })
  return status
}
