function highAndLow(numbers){
    // ...
   let newNum = numbers.split(' ')
   return `${Math.max(...newNum)} ${Math.min(...newNum)}`
  }