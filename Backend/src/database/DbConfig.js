const mongoose = require('mongoose')
require('dotenv').config()

const DbConnect = async ()=>{
  try {
   const DbInstance =  await mongoose.connect(process.env.DATABASE__URL)
   if (DbInstance) {
    console.log("db sucessfull");   
   }else{
    console.log("db failed");
   }
  } catch (error) {
    console.log("db not connect", error);    
  }
}

module.exports = {DbConnect}