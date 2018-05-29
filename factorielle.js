const factorielle = (num) => {
  if (num>1) return num*factorielle(num-1)
  else return num*1
}

console.log(factorielle(10))
