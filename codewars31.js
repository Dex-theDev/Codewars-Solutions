function pairs(ar){
    //..
     count = 0
     for(i = 0; i < ar.length ; i+= 2){
       if(ar[i] - 1 === ar[i + 1] || ar[i] + 1 === ar[i + 1]){
         count += 1
       }
     }
     return count
   };