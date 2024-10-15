let phi = 3.14;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

let area21 = calculateArea({ radius: 21, power: 2 });
let area7 = calculateArea({ radius: 7, power: 2 });

export { area21, area7, calculateArea };
