const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        brand:{
          type:String,
          required:true,
        },
        ram:{
          type:Number,
          required:true,        
        },
        rom:{
          type:Number,
          required:true,
        },
        price:{
          type:Number,
          required:true,
        },
        color:{
          type:String,
          required:true,
        }
});

module.exports = mongoose.model('Product', productSchema);
