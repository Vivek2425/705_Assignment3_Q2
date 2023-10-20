const express = require('express');
const ProductModel = require('../Model/Product.model');
const multer = require('multer');
const router = express.Router();
var storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./public/images/");
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname);
    }
})
var product_image = multer({storage:storage});
// var product_image =  multer({ dest: '../public/images/' });
router.post("/add",product_image.single("proImg"),(req,res)=>{
    console.log("file : ",req.body)
    // console.log(req.body)
    // res.send(req.file);
    var data = new ProductModel({
        name : req.body.pname,
        price :req.body.price,
        image : req.body.proImg,
        // image : req.file.filename,
        description : req.body.description,
        category : req.body.category,
        available : req.body.availablility
    })
    // console.log("data : ",data)
    // res.status(200).send(data);
    data.save().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
})

router.get("/",(req,res)=>{
    ProductModel.find().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(404).send(err);
    });
})

module.exports = router;