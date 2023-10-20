const jwt  = require("jsonwebtoken");
const { token } = require("morgan");

const sign  = (req,res)=>{
    const token = jwt.sign(req.body,"12345",{algorithm:"HS256",expiresIn:30000})
    res.send(token);
}

const verify = (req,res)=>{
    const token = req.headers.authorization;
    // const token = req.headers.Authorization;
    console.log(token);
    const data = jwt.verify(token,"12345");
    res.send(data);
    // res.send(token);
}
module.exports = {sign,verify};
