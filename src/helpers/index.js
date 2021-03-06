
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

export const getRandomNumbers = (min, max, quantity) => {
  let phoneN = new Set();
  while(phoneN.size < quantity){
    phoneN.add(generateNumbers(max, min));
  }
  return createPhoneNoObjects(phoneN.values());
}
