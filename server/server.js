const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const userRoutes = require("./routes/user");
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.listen(3001, () => {
  console.log("server listening to 3001");
});
