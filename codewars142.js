/*
Your task is to write function factorial.

*/

function factorial(n){
    //your code here
    let result = 1
    for(i = 2; i <= n; i++){
      result = result * i
    }
    return result
  }