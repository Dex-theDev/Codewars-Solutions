function sum() {
  // return the sum of all arguments given.
  let args = Array.from(arguments)
  return args.reduce((prev,curr) => prev + curr, 0)
}