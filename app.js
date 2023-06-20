const config = require('./config');
require('dotenv').config();
const ejs = require('ejs');
const path = require('path');
const Product = require('./models/product');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const routers_prd = require("./routes/product");
const mongoConnect = require('./db/connect');


const staticPath = path.join(__dirname, 'views');
app.use(express.static(staticPath));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))


app.get("/",(req,res)=>{
    res.render('index');
})

app.use('/api/products',routers_prd);

async function start(){
    try{
    // await mongoConnect(process.env.MONGODB_URL);
    await mongoConnect(config.MONGODB_URL);
    app.listen(port,(req,res)=>{
        console.log(`Server is Listening at https://localhost:${port}`);
    })
    }
    catch(err){
        console.log(err);
    }

}
start();