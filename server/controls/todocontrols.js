const Todo_list = require("../models/ToDo");
const User = require("../models/User");
var ObjectId = require("mongoose").Types.ObjectId;

const fetchTodos = async (req, res) => {
  const todo = await Todo_list.find({ user: new ObjectId(req.body.userId) });
  res.json({ todo: todo });
};

const fetchTodo = async (req, res) => {
  const todo_id = req.params.id;

  const todo = await Todo_list.findById(todo_id);

  res.json({ todo: todo });
};

const CreateTodo = async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  //using postman tested it
  const todo = await Todo_list.create({
    title: title,
    body: body,
    user: req.body.userId,
  });

  res.json({ todo: todo });
};

const updateTodo = async (req, res) => {
  const todo_id = req.params.id;

  const title = req.body.title;
  const body = req.body.body;

  await Todo_list.findByIdAndUpdate(todo_id, {
    title: title,
    body: body,
  });

  const todo = await Todo_list.findById(todo_id);
  res.json({ todo: todo });
};

const deleteTodo = async (req, res) => {
  const todo_id = req.params.id;

  const title = req.body.title;
  const body = req.body.body;

  await Todo_list.findByIdAndDelete(todo_id);

  res.json({ Sucess: "deleted" });
};

module.exports = {
  fetchTodos: fetchTodos,
  fetchTodo: fetchTodo,
  CreateTodo: CreateTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
