require('dotenv').config()
const mongoose = require('mongoose');
async function ConnectToDB(){
    await mongoose.connect(process.env.mongodb_url);
    console.log("connected")
}
module.exports=ConnectToDB;