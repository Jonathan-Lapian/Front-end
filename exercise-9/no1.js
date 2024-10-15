let condition = true;
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    } else {
      reject("Gagal");
    }
  });
};

const message = async () => {
  try {
    let msg = await helloWorld();
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
};

export { message, };
