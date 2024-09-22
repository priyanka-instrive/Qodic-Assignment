const Character = require("./index.js");

const createData = async (userData) => {
  const newUser = await Character.create(userData);
  return newUser;
};

const getData = async (query) => {
  const { name, homeworld, film, species } = query;
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }

  if (homeworld) {
    query.homeworld = homeworld;
  }

  if (film) {
    query.films = film;
  }

  if (species) {
    query.species = species;
  }

  const users = await Character.find(query);
  return users;
};

module.exports = {
  createData,
  getData,
};
