const express = require("express");
const ItemController = require("./src/controllers/item.controller");

const router = express();

//find and show all users
router.get("/items", ItemController.getAll);

//create user
router.post("/items", ItemController.save);

//find one user by id
router.get("/items/:id", ItemController.getById);

//Put user by id
router.put("/items/:id", ItemController.update);

//Delete user by id
router.delete("/items/:id", ItemController.delete);

module.exports = router;
