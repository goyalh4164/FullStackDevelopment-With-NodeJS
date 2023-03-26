const jwt = require('jsonwebtoken'); //Token Generator
const JWT_SECRET ='HarshSignature' //with this we sign our web token

const fetchuser = (req,res,next)=>{
    // Get the user from the jwt token and add id to the req object
    const token =req.header('auth-token'); //we have placed the token on the header of the request
        if(!token){
            res.status(401).send({error : "Please authenticate using valid token"});
        }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user =data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please authenticate using valid token"});
    }
}


module.exports =fetchuser;