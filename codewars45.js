function fakeBin(x){
    let result = []
    Array.from(x).forEach(num => {
      Number(num)
      if(num < 5){
        result.push('0')
      } else {
        result.push('1')
      }
    })
    return result.join('')
    
  
  }