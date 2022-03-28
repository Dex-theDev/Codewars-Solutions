function sort(initialArray, sortingArray) {
    let result = [] // make an empty array for your answer
    for (i=0; i<initialArray.length; i++){ // iterate through initial array
      result[sortingArray[i]] = initialArray[i]
    }// this fills the empty array with the element attached to the sorting array
    return result
  }