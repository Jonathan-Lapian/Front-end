//1. string literal
const greet = (fullName = "John", age = 49) => {
  console.log(`Halo nama saya ${fullName} dan saya berumu ${age}`);
};

greet();
