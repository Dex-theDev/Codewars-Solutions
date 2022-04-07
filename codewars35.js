function minValue(values){
    //your code here
    let result = []
    let newArr = values.sort((a,b) => a - b)
    for(i = 0; i < newArr.length; i++){
      if(newArr[i] !== newArr[i+1]){
        result.push(newArr[i])
      }
    }
    return +result.join('')
  }