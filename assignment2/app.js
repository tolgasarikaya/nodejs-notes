/* const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Middleware");
//   res.send("<h1>Assignment Solved(almost)</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("/users middleware");
  res.send("<p>Middleware that handles /users</p>");
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("<p>Middleware that handles /</p>");
});

app.listen(4000);
 */

const express = require("express");
const app = express();

/* app.use("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.use((req, res, next) => {
  console.log("In middleware 1");
  res.set("Cache-Control", "no-store");
  next();
});
app.use((req, res, next) => {
  console.log("In middleware 2");
  res.set("Cache-Control", "no-store");
  res.send("<h1>Assignment 2</h1>");
}); */

app.use("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.use("/users", (req, res, next) => {
  res.set("Cache-Control", "no-store");
  res.send("<h1>Users Page</h1>");
});

app.use("/", (req, res, next) => {
  res.set("Cache-Control", "no-store");
  res.send("<h1>Not Users Page</h1>");
});

app.listen(3000);
