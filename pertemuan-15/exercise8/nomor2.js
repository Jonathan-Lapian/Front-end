const addNumber = (...numbers) => {
  let sum = 0;
  //Change to map function
  numbers.map((item) => (sum += item));
  return sum;
};


export { addNumber };