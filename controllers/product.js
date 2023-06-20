const Product = require('../models/product')

async function getAllProducts(req, res) {
    const {brand,ram,rom,color,sort,limit,select} = req.query;
    const queryObj = {};
    if(brand){
        queryObj.brand = brand
    }
    if(ram){
        queryObj.ram = ram
    }
    if(rom){
        queryObj.rom = rom
    }
    if(color){
        queryObj.color = color
    }
    let link = Product.find(queryObj)
    if(sort){
        let sortFix = sort.replace(',',' '); 
        console.log("Sortfix: "+ sortFix);
        link = link.sort(sortFix);
    }
    if(limit){
        let lim = limit;
        link = link.limit(lim);
    }
    if(select){
        let selectFix = select.replace(',',' ');
        link = link.select(selectFix);
    }
    //after it queryObj becomes -> { brand: 'Apple', ram: 4, rom: 64, color: 'Black' }//
    // const Products = await Product.find({brand:"Apple",ram:13});
    const Products = await link;
    // const Products = await Product.find(queryObj);
    // const Products = await Product.find(req.query);
    console.log(req.query);
    res.status(200).json({Products});
}

module.exports = {getAllProducts};