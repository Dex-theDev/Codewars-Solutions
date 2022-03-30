function differenceInAges(ages){
  let dif = []
  dif.push(Math.min(...ages),Math.max(...ages),(Math.max(...ages) - Math.min(...ages)))
  return dif
}