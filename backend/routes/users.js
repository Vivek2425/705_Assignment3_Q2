var express = require('express');
const userModel = require('../Model/UserSchema.model');
const { sign, verify } = require('../config/jwt.config');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  userModel.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err)
  });
});

router.post("/",function(req,res){
  const user = new userModel({
    email : req.body.email,
    uname : req.body.uname,
    password : req.body.password,
    phoneNo : req.body.phoneNo
  })
  user.save().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err);
  });
})

router.post("/login",(req,res)=>{
  if(req.body.uname==null && req.body.password==null){
    res.status(400).send("Please provide credentials");
  }else{
    userModel.findOne({uname:req.body.uname,password:req.body.password}).then(async (result) => {
       sign(req,res);
      // res.status(200).send(token)
    }).catch((err) => {
      res.status(404).send(err);
    });
  }
})

router.post("/getUserData",(req,res)=>{
  verify(req,res);

})
module.exports = router;
