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

export { ambilDataUser };
