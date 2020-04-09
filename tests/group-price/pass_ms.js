const groupPrice = (str) => {
  let arr = []
  var myRegexp = /(?:\$|(?:USD))([0-9]+)\.([0-9]{2})/g
  var match = myRegexp.exec(str)
 if (match != null) {
    arr.push(match[0])
    arr.push(match[1])
    arr.push(match[2])
    return arr
  }
  return arr
}
