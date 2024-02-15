const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.set("Cache-Control", "no-store");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.set("Cache-Control", "no-store");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
