/*

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
*/
function evenNumbers(array, number) {
    // good luck
    
    let newArr = []
    array.forEach(num => {
      if(num % 2 === 0){
        newArr.push(num)
      }
    })
    return newArr.slice(-number)
  }