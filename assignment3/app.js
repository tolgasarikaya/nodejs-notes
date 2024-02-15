const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");
const errorRoutes = require("./routes/error");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoutes);
app.use("/", mainRoutes);
app.use(errorRoutes);

app.listen(3000);
