export const getAll = () => {
  return fetch("http://localhost:5000/pets").then((res) =>
    res.json().catch((error) => console.log(error))
  );
};
