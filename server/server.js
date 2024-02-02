require('dotenv').config();
const cookieParser = require("cookie-parser");
const conn=require('./config/connectToDb');
const express = require('express');
const todocontrols = require('./controls/todocontrols');
const usercontrol=require("./controls/userControl");
const requireAuth = require("./middleware/requireauth");
const app = express();
app.use(cookieParser());
var cors = require('cors')
app.use(express.json());
app.use(cors({
    origin:true,
    credentials: true,
}))
conn();

//login,logout,signup routes
app.post('/signup', usercontrol.signup);
app.post('/login', usercontrol.login);
app.get('/logout', usercontrol.logout);
app.get('/checkauth', requireAuth,usercontrol.checkAuth);


//read all
app.get('/posts',todocontrols.fetchTodos);

//read one

app.get('/posts/:id',todocontrols.fetchTodo);


//create
app.post('/posts',todocontrols.CreateTodo);

//update

app.put('/posts/:id',todocontrols.updateTodo);


//delete
app.delete('/posts/:id',todocontrols.deleteTodo);

app.listen(process.env.port)