//1. Promise

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

message();

//2. Fetch

const ambilDataUser = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) =>
        users.data.forEach(({ first_name, last_name }) => {
          console.log(`Fetch = ${first_name} ${last_name}`);
        })
      );
  });
};

ambilDataUser();

//3. Async - await
(async () => {
  let response = await fetch("https://reqres.in/api/users");
  let json = await response.json();
  json.data.forEach(({ first_name, last_name }) => {
    console.log(`Async = ${first_name} ${last_name}`);
  });
})();

//4. Axios
(async () => {
  let res = await axios.get("https://reqres.in/api/users");
  console.log(res.data.data);
  res.data.data.forEach(({ first_name, last_name }) => {
    console.log(`Axios = ${first_name} ${last_name}`);
  });
})();
