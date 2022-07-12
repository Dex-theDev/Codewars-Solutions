/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.



*/


function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    const numbers = [0,1]
    for(i = 2; i < n + 1; i++){
      numbers.push(numbers[i - 2] + numbers[i - 1])
    }
    return numbers[n - 1]
  }
  console.log(nthFibo(3))