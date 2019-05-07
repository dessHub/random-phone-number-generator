
const generateNumbers = (maxV, minV) => {
  const max = Math.floor(maxV);
  const min = Math.ceil(minV)
  return Math.floor(Math.random()*(max - min) + min)
}

export const getRandomNumbers = () => {
  console.log("being invoked");
  let phoneN = new Set();
  while(phoneN.size < 4){
    phoneN.add(generateNumbers(99999999, 10000000));
  }
  return phoneN.values();
}
