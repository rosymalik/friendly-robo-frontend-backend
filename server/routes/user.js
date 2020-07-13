const userRoutes = require("express").Router();
const fs = require("fs");
const { json, response } = require("express");
const userDataPath = "data/users.json";
const { v4: uuidv4 } = require("uuid");
const { resolve } = require("path");

const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(userDataPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data ? JSON.parse(data) : { users: [] });
    });
  });
};

const updateUserFile = async (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(userDataPath, JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
};
userRoutes.get("/", (req, res) => {
  getAllUsers().then((response) => res.json(response));
});
userRoutes.post("/", async (req, res) => {
  const { name, email } = req.body;
  const { users } = await getAllUsers();
  const newUser = {
    id: uuidv4(),
    name: name,
    email: email,
  };
  users.push(newUser);
  updateUserFile({ users }).then(() => res.json({ user: newUser }));
});
userRoutes.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { users } = await getAllUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex > -1) {
    const updateUser = { ...users[userIndex] };
    const { name, email } = req.body;
    if (name) {
      updateUser.name = name;
    }
    if (email) {
      updateUser.email = email;
    }
    users[userIndex] = updateUser;
    updateUserFile({ users }).then(() =>
      res.status(200).json({ user: updateUser })
    );
  } else {
    res.status(404).json({ error: `user with id:${id} is not found!!` });
  }
});
userRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let { users } = await getAllUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex > -1) {
    users = users.filter((user) => user.id !== id);
    updateUserFile({ users }).then(() => res.status(200).end());
  } else {
    res.status(404).json({ error: `user with id:${id} is not found!!` });
  }
});

module.exports = userRoutes;
