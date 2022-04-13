function findSum(){
  //code here
  let args = Array.from(arguments)
  let result = args.reduce((prev,curr) =>{
    if(prev < 0 || curr < 0){
      return -1
    }
    return prev + curr
  },0)
 return result
  
}