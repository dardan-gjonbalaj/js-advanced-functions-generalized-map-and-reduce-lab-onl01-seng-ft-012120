// Add your functions here
function map(sourceArray, fn) {
  let newArray = []

  for(let i = 0; i < sourceArray.length; i++) {
    newArray[i] = (fn(sourceArray[i]))
  }
  return newArray
}

function reduce(sourceArray, fn, start) {
  let newArray = (!!start) ? start : sourceArray[0]
  let i = (!!start) ? 0 : 1

  for(; i < sourceArray.length; i++) {
    newArray = fn(sourceArray[i], newArray)
  }
  return newArray
}