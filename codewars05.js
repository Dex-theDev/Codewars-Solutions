function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let re = /T| /gi
    return dna.replace(re, 'U')
  
  }