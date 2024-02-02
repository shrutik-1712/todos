const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title:String,
    body:String,

    user:{
      type: mongoose.Schema.Types.ObjectId, ref: "User",
    },

  });
  const Todo_list = mongoose.model('todolist', Schema);


  module.exports=Todo_list;