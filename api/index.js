const express = require("express");
const cors = require("cors");
const TodoRoute = require("./routes/routeTodo.js");
require("./db/index.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));
app.use("/todo", TodoRoute);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
