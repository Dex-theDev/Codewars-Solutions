/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

*/



function sumDigits(number) {
    const arr = Math.abs(number).toString().split('')
    return arr.map(num => +num).reduce((p,c)=> p+c,0)
   }
   
   
   console.log(sumDigits(-32))