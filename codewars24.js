const positiveSum = arr => arr.filter(n => n > 0).reduce((p,c) => {
    return p + c
  }, 0) 