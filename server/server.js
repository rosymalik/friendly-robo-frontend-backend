const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Request types - GET, POST, PUT, DELETE
const users = [
  {
    id: 1,
    name: "Ross",
    email: "ross@gmail.com",
  },
  {
    id: 2,
    name: "monica",
    email: "monica@gmail.com",
  },
  {
    id: 3,
    name: "rachel",
    email: "rachel@gmail.com",
  },
];
app.get("/users", (req, res) => {
  res.json({ users: users });
});
app.post("/user", (req, res) => {
  res.json({ message: "POST" });
});
app.put("/user", (req, res) => {
  res.json({ message: "PUT" });
});
app.delete("/users", (req, res) => {
  res.json({ message: "DELETE" });
});
app.listen(3001, () => {
  console.log("server listening to 3001");
});
