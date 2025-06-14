const mongoose=require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    gmail: {
        type:String,
        required:true,
    },
    pass: {
        type:String,
        required:true,
    },
  });
  const model=mongoose.model('User',schema)
  module.exports=model