function find_average(array) {
    // your code here
    // i need to create a loop that iterates through a given array, then add to the sum
    let sum = 0
    array.forEach(e => sum += e)
    let average = sum / array.length
    if(array.length === 0){
      return 0
    }
    return average
  }