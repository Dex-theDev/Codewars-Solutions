function maxGap (numbers){
    //your code here
    let newArr = []
    let sorted = numbers.sort((a,b)=> a-b)
    for(i = 0; i<sorted.length-1; i++){
      newArr.push(Math.abs(sorted[i]- sorted[i+1]))
    }
    return Math.max(...newArr)
  }