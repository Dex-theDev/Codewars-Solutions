function oddOrEven(array) {
    //enter code here
   let result = array.reduce((p,c)=> p + c, 0)
   if(result % 2=== 0) {
     return `even`
   } else {
     return `odd`
   }
 }