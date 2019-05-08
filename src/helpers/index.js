
const generateNumbers = (maxV, minV) => {
  const max = Math.floor(maxV);
  const min = Math.ceil(minV)
  return Math.floor(Math.random()*(max - min) + min)
}

const createPhoneNoObjects = (numbers) => {
  let numberArr = [];
  Array.from(numbers).forEach( key => {
    const obj = new Object();
    obj.index = numberArr.length + 1;
    obj.phoneNumber = `07${key}`;
    numberArr.push(obj);
  })
  return numberArr;
};

export const getRandomNumbers = () => {
  let phoneN = new Set();
  while(phoneN.size < 10000){
    phoneN.add(generateNumbers(99999999, 10000000));
  }
  return createPhoneNoObjects(phoneN.values());
}
