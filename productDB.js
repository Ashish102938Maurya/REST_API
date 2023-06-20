require("dotenv").config();
const mongoConnect = require("./db/connect");
const Product = require('./models/product');

const jsonFile = require('./product.json');
async function connect(){
    try{
        await mongoConnect(process.env.MONGODB_URL);
        await Product.deleteMany({});
        setTimeout(() => { 
         Product.create(jsonFile);
         console.log("Added to Your Database");
        },1000);
    }
    catch(err){
        console.log(err);
    }
}
connect();