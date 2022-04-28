function accum(s) {
    // your code
    let newWord = Array.from(s.toLowerCase()).map((e,i) => e.repeat(i+1))
    let newerWord = newWord.map(el => el.charAt(0).toUpperCase() + el.slice(1))
    return newerWord.join('-')
  }