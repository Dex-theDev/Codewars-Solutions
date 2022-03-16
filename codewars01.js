function betterThanAverage(classPoints, yourPoints) {
    // Your code here
   let sum = 0
   classPoints.forEach((e) => sum += e)
   let average = sum / classPoints.length
   if(average  > yourPoints){
     return false
   } else if(average < yourPoints){
     return true
   }
    
  }