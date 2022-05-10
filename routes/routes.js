const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const cors = require("cors");

// API Paths
router.get("/", controller.showIndex);

router.post("/add-todo", cors(), controller.addTodo);

router.get("/get-todo/:id", cors(), controller.getTodo);

router.get("/show-todos", cors(), controller.showTodos);

router.put("/modify-todo/:id", cors(), controller.modifyTodo);

router.delete("/delete-todo/:id", cors(), controller.deleteTodo);

module.exports = router;
