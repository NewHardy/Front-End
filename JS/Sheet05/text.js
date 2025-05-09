let user;

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((artem) => artem.json())
  .then((result) => {
    user = result;
  });

console.log(user);
