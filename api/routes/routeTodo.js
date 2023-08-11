const express = require("express");
const router = express.Router();
const Todo = require("../db/schemas/todo");
router.get("/todos", async (req, res) => {
  const todo = await Todo.find();
  res.json(todo);
});
router.post("/new", async (req, res) => {
  const { text } = req.body;
  const todo = await Todo.create({ text });
  res.json(todo);
});

router.delete("/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.send(result);
});
router.put("/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.send(todo);
});

module.exports = router;
