const express = require("express");
const ItemController = require("./src/controllers/item.controller");

const router = express();

//find and show all users
router.get("/products", ItemController.getAll);

//create user
router.post("/products", ItemController.save);

//find one user by id
router.get("/products/:id", ItemController.getById);

//Put user by id
router.put("/products/:id", ItemController.update);

//Delete user by id
router.delete("/products/:id", ItemController.delete);

module.exports = router;
